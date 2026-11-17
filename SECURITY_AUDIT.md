# Aspirations Web Application - Verified Security Audit & Remediation Guide

**Target:** Aspirations Web Application (`/home/bs01415/Documents/Programming/Aspirations/Aspirations`)  
**Stack:** Next.js 16.4.5 (App Router), React 19.3.0, TypeScript 5, Tailwind CSS v4, Firebase 13.2.0  
**Scope:** Strictly verified findings present in the current codebase, with implementation notes compatible with Next.js 16.4.5.

---

## Summary

This report retains only verified security findings confirmed directly in source files and removes fabricated, inapplicable, and overstated items from the prior draft.

There are **9 verified findings**: **2 Critical**, **3 High**, **2 Medium**, and **2 Low**.

| ID | Finding Title | Domain | Severity | Primary Files |
| :--- | :--- | :--- | :--- | :--- |
| **VULN-01** | Direct Client-Side Firestore Mutations & Unversioned `firestore.rules` | Database / Auth | **Critical** | `AddSkill.tsx`, `UpdateSkill.tsx`, `AddKidsCorner.tsx`, `UpdateKidCorner.tsx` |
| **VULN-02** | Forgable Boolean Auth Cookies (`admin_auth`, `user_auth`) & Client Cookie Writes | Auth / Proxy | **Critical** | `src/proxy.ts`, `AdminLogin/page.tsx`, `login/page.tsx`, `UserContext.tsx` |
| **VULN-03** | YouTube API Key Exposed to Client Bundles (`NEXT_PUBLIC_YOUTUBE_API_KEY`) | Secrets | **High** | `.env.local`, `src/lib/youtube.ts`, `api/youtube/*/route.ts` |
| **VULN-04** | Client-Only Admin Guard, Hardcoded Admin Email & `emailVerified` Bypass | Auth / Config | **High** | `AdminGuard.tsx`, `login/page.tsx`, `AdminLogin/page.tsx`, `UserContext.tsx` |
| **VULN-05** | Unauthenticated & Unthrottled YouTube API Routes | API / Quota | **High** | `api/youtube/search/route.ts`, `api/youtube/video/route.ts` |
| **VULN-06** | Missing HTTP Security Headers in Next Config | Infrastructure | **Medium** | `next.config.ts` |
| **VULN-07** | Open Redirect via Unvalidated `from` Query Parameter on Login Flows | Auth / Redirect | **Medium** | `AdminLogin/page.tsx`, `login/page.tsx` |
| **VULN-08** | Unvalidated YouTube Video `id` Parameter in Iframe Embed URL | Client / Embed | **Low** | `src/app/video-play-skills/[id]/page.tsx` |
| **VULN-09** | Upstream API & Exception Error Disclosure in YouTube Route Handlers | Info Disclosure | **Low** | `api/youtube/search/route.ts`, `api/youtube/video/route.ts` |

---

## Verified Findings

### VULN-01: Direct Client-Side Firestore Mutations & Unversioned `firestore.rules`
* **Severity:** **Critical** *(contingent on remote Firebase Console rules, which cannot be inspected from the repository)*
* **Locations:**
  * `src/components/admin/AddSkill.tsx` (Lines 6–13, 67 — `addDoc(collection(db, "SkillList"), newSkill)`)
  * `src/components/admin/UpdateSkill.tsx` (Lines 4–5, 47 — `deleteDoc(doc(db, "SkillList", id))`)
  * `src/components/admin/AddKidsCorner.tsx` (Lines 6–13, 67 — `addDoc(collection(db, "kidList"), newSkill)`)
  * `src/components/admin/UpdateKidCorner.tsx` (Lines 5–6, 48 — `deleteDoc(doc(db, "kidList", id))`)
* **Verified Behavior:** Admin pages execute `addDoc` and `deleteDoc` directly from browser client components using the Firebase Web SDK. There is no `firestore.rules` file in the repository and no `firebase-admin` dependency in `package.json`. Because admin status is not backed by Firebase Custom Claims on user tokens, any server-side Firestore rule cannot verify admin privileges via claims unless an admin email is hardcoded in Console rules.
* **How to Fix:**
  1. Provision Firebase Custom Claims (`{ admin: true }`) for admin accounts (or authenticate admin mutations exclusively on the server via `firebase-admin`).
  2. **Recommended:** Move skill/kids mutations (`POST`/`DELETE`) to server-side Next.js Route Handlers (e.g., `/api/admin/skills`, `/api/admin/kids`) using `firebase-admin` after verifying a valid session/ID token with `decoded.admin === true` (and `email_verified === true`), then update `AddSkill`, `UpdateSkill`, `AddKidsCorner`, and `UpdateKidCorner` to call those routes.
  3. Add a version-controlled `firestore.rules` file and deploy it **after** migrating writes (or provisioning claims) so admin mutations do not break mid-rollout:
     * If all writes move to `firebase-admin` Route Handlers, lock client writes completely (`allow write: if false;` on `SkillList` and `kidList`, because `firebase-admin` bypasses security rules).
     * Keep client reads scoped as needed (`allow read: if request.auth != null;` on `SkillList` and `kidList`) and deny all other paths (`allow read, write: if false;`).

---

### VULN-02: Forgable Boolean Auth Cookies (`admin_auth`, `user_auth`) & Client Cookie Writes
* **Severity:** **Critical**
* **Locations:**
  * `src/proxy.ts` (Lines 4–35, 37–46)
  * `src/app/AdminLogin/page.tsx` (Lines 28–29, 42–43)
  * `src/app/login/page.tsx` (Line 44)
  * `src/context/UserContext.tsx` (Lines 64, 73, 77)
  * `src/components/Navigation.tsx` (Lines 25–26)
* **Verified Behavior:**
  * `src/proxy.ts` authorizes requests to `/add/:path*`, `/update-delete/:path*`, `/skills/:path*`, `/kids/:path*`, `/skills-video-list/:path*`, and `/video-play-skills/:path*` solely by checking whether `admin_auth` or `user_auth` equals `"true"`.
  * Those cookies are written and cleared in browser JavaScript using `document.cookie` with no cryptographic signature, no user binding, no `HttpOnly` flag, and no `Secure` flag.
  * Any visitor can forge `admin_auth=true` and `user_auth=true` in browser DevTools to bypass `src/proxy.ts` redirects (client pages still gate UI rendering behind `AdminGuard` / `UserContext`, but `proxy.ts` provides zero real server enforcement).
* **Next.js 16.4.5 Constraint (Do Not Violate):**
  * This repository runs Next.js `16.4.5`. In Next.js 16, `middleware.ts` is **deprecated** and replaced by `src/proxy.ts` exporting `proxy` (which defaults to the Node.js runtime; see `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`). **Keep `src/proxy.ts` exporting `proxy`; do not rename it to `src/middleware.ts`.**
* **How to Fix:**
  1. Add `firebase-admin` and server-only credentials (e.g., `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY` or service account JSON).
  2. Implement `POST /api/auth/session` to accept a Firebase ID token from the client, verify it with `adminAuth.verifyIdToken(idToken, true)`, confirm `email_verified === true`, and mint an `HttpOnly`, `SameSite=Lax`, `Secure` (in production) session cookie via `adminAuth.createSessionCookie(idToken, { expiresIn })`.
  3. Implement `POST /api/auth/logout` to verify/decode the session cookie, call `adminAuth.revokeRefreshTokens(decoded.sub)` when present, and expire the session cookie.
  4. Update `AdminLogin/page.tsx`, `login/page.tsx`, `UserContext.tsx`, and `Navigation.tsx` to call `/api/auth/session` and `/api/auth/logout` instead of writing `admin_auth`/`user_auth` via `document.cookie`.
  5. Update `src/proxy.ts` to **cryptographically verify** the session cookie (never trust cookie presence alone). Because `proxy.ts` runs on Node.js runtime in Next.js 16, verify the Firebase session cookie (and enforce `decoded.admin === true` for `/add` and `/update-delete`) before calling `NextResponse.next()`, redirecting to `/AdminLogin` or `/login` on failure.

---

### VULN-03: YouTube API Key Exposed to Client Bundles (`NEXT_PUBLIC_YOUTUBE_API_KEY`)
* **Severity:** **High**
* **Locations:**
  * `.env.local` (Line 7 — `NEXT_PUBLIC_YOUTUBE_API_KEY`), `.env.example` (Line 10)
  * `src/lib/youtube.ts` (Lines 1–4, 52–93, 115–155)
  * `src/app/api/youtube/search/route.ts` (Lines 15–17)
  * `src/app/api/youtube/video/route.ts` (Lines 15–17)
* **Verified Behavior:** `src/lib/youtube.ts` is imported by `"use client"` components (`Navigation.tsx`, `skills/page.tsx`, `kids/page.tsx`, `skills-video-list/page.tsx`, `video-play-skills/[id]/page.tsx`). Reading `process.env.NEXT_PUBLIC_YOUTUBE_API_KEY` at lines 1–4 causes Next.js to inline the API key into client JavaScript bundles, and lines 52–93 / 115–155 contain direct client-side fallback calls to `https://www.googleapis.com/youtube/v3/...`.
* **How to Fix:**
  1. Remove `NEXT_PUBLIC_YOUTUBE_API_KEY` from `.env.local`, `.env.example`, `src/lib/youtube.ts`, `src/app/api/youtube/search/route.ts`, and `src/app/api/youtube/video/route.ts`. Use server-only `YOUTUBE_API_KEY` exclusively inside server Route Handlers.
  2. Remove direct `googleapis.com` fetch fallbacks from `src/lib/youtube.ts` so browser code calls only `/api/youtube/search` and `/api/youtube/video`.
  3. Rotate the leaked YouTube API key in Google Cloud Console and apply API/application restrictions.

---

### VULN-04: Client-Only Admin Guard, Hardcoded Admin Email & `emailVerified` Bypass
* **Severity:** **High**
* **Locations:**
  * `src/components/admin/AdminGuard.tsx` (Lines 9, 18–40)
  * `src/app/login/page.tsx` (Line 43)
  * `src/app/AdminLogin/page.tsx` (Lines 26–27)
  * `src/context/UserContext.tsx` (Line 62)
  * `src/components/AdminSideBar.tsx` (Line 13)
  * `src/components/UserSideBar.tsx` (Line 10)
* **Verified Behavior:**
  * The email `"durjoybarua1971@gmail.com"` is hardcoded as a client-side fallback across six client files, leaking the administrator's address in client JS bundles.
  * `src/app/login/page.tsx` line 43 explicitly bypasses `emailVerified` for that hardcoded email:
    `if (userCredential.user.emailVerified || userCredential.user.email === "durjoybarua1971@gmail.com")`
  * `src/app/AdminLogin/page.tsx` lines 26–27 check the raw form `email === adminEmail` without verifying `userCredential.user.emailVerified` or a server-issued claim.
  * `AdminGuard.tsx` performs authorization solely inside client React state.
* **How to Fix:**
  1. Assign `{ admin: true }` via Firebase Custom Claims using a one-off `firebase-admin` script (and remove `NEXT_PUBLIC_ADMIN_EMAIL` / hardcoded `"durjoybarua1971@gmail.com"` fallbacks from all client files).
  2. Enforce `emailVerified` consistently on login (and verify `email_verified` in `/api/auth/session`).
  3. In client UI components (`AdminGuard`, `AdminSideBar`, `UserSideBar`), read the custom claim from `user.getIdTokenResult()` (or a server `/api/auth/me` endpoint) for UI rendering only, while enforcing real admin access in `src/proxy.ts`, backend admin Route Handlers, and `firestore.rules`.

---

### VULN-05: Unauthenticated & Unthrottled YouTube API Routes
* **Severity:** **High**
* **Locations:**
  * `src/app/api/youtube/search/route.ts` (Lines 4–78)
  * `src/app/api/youtube/video/route.ts` (Lines 4–79)
* **Verified Behavior:** Both `/api/youtube/search` and `/api/youtube/video` have no authentication check, no rate limiting, and no maximum length check on `q` or `id`. Although `{ next: { revalidate: 86400 } }` caches repeated identical URLs, unique `?q=` parameters bypass the cache and trigger `search.list` calls (100 YouTube quota units per request against a 10,000 units/day default quota).
* **How to Fix:**
  1. Require a verified user session cookie in both Route Handlers (since video browsing pages are user-only routes).
  2. Add rate limiting per authenticated user ID / IP (prefer distributed store such as Redis/Upstash in multi-instance/serverless deployments, or a sliding-window limiter if single-instance).
  3. Validate inputs cleanly:
     * In `/api/youtube/search`: validate `1 <= query.trim().length <= 100` (avoid overly strict regexes like `^[\w\s-]+$` that reject valid course queries such as `C++`, `C#`, `Node.js`, or `UI / UX`).
     * In `/api/youtube/video`: validate `id.trim()` matches `/^[a-zA-Z0-9_-]{11}$/`.
  4. **Compatibility Notes:**
     * Keep returning the mapped `YouTubeVideo[]` / `YouTubeVideo` objects expected by `src/components/VideoCard.tsx` and `src/app/video-play-skills/[id]/page.tsx` (do not return raw `data.items`).
     * Keep the `NEXT_PRERENDER_INTERRUPTED` / `digest?.startsWith?.("NEXT_")` rethrow in the `catch` blocks (required by `cacheComponents: true` in `next.config.ts`).

---

### VULN-06: Missing HTTP Security Headers in `next.config.ts`
* **Severity:** **Medium**
* **Location:** `next.config.ts` (Lines 3–85)
* **Verified Behavior:** `next.config.ts` configures `images`, `cacheComponents`, `partialPrefetching`, `redirects`, and `turbopack`, but defines no `headers()` rule for clickjacking, MIME-sniffing, referrer leakage, permissions, HSTS, or CSP.
* **How to Fix:**
  1. Add `async headers()` to `next.config.ts` **while keeping all existing properties** (`images`, `cacheComponents`, `partialPrefetching`, `redirects`, `turbopack`).
  2. Include `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, and `Strict-Transport-Security` (in production).
  3. Add a `Content-Security-Policy` aligned with the external hosts actually used by the app:
     * `frame-src`: `https://www.youtube.com https://www.youtube-nocookie.com`
     * `frame-ancestors 'none'`
     * `connect-src`: `'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://firestore.googleapis.com https://firebaseinstallations.googleapis.com https://*.firebaseio.com`
     * `img-src`: restrict appropriately (e.g., `'self' data: blob: https://i.ytimg.com https://img.youtube.com https://img.freepik.com https://firebasestorage.googleapis.com https://lh3.googleusercontent.com https://i.ibb.co https://raw.githubusercontent.com` matching `images.remotePatterns`)
     * Verify `script-src` behavior with Next.js 16 `cacheComponents` and Firebase Auth before tightening `'unsafe-inline'` (or configure nonce-based CSP).

---

### VULN-07: Open Redirect via Unvalidated `from` Query Parameter on Login Flows
* **Severity:** **Medium**
* **Locations:**
  * `src/app/AdminLogin/page.tsx` (Lines 15, 38–39)
  * `src/app/login/page.tsx` (Lines 21, 53–54)
* **Verified Behavior:** After a successful sign-in, both `AdminLoginPage` and `LoginPage` read `const from = searchParams.get("from");` and call `router.push(from || "/");` with no validation. Supplying `/login?from=https://attacker.example` or `/AdminLogin?from=//attacker.example` redirects authenticated users to an external origin immediately after login.
* **How to Fix:**
  1. Extract a shared helper (e.g., `getSafeRedirectPath(from: string | null): string`) that defaults to `"/"` unless `from` is a strictly relative internal path:
     * Must start with `"/"`, and must **not** start with `"//"` or `"/\\"`.
     * Parsing with `new URL(from, "http://localhost")` must yield `origin === "http://localhost"`, returning `parsed.pathname + parsed.search + parsed.hash`.
  2. Apply this helper in both `src/app/AdminLogin/page.tsx` and `src/app/login/page.tsx` before calling `router.push(...)`.

---

### VULN-08: Unvalidated YouTube Video `id` Parameter in Iframe Embed URL
* **Severity:** **Low**
* **Location:** `src/app/video-play-skills/[id]/page.tsx` (Lines 13, 80–87)
* **Verified Behavior:** `id` is extracted from `useParams()` (which URI-decodes dynamic route segments) and interpolated directly into `src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}`. Encoded characters such as `%3F` or `%2F` can inject extra query parameters or navigate sub-paths on `www.youtube.com` inside the iframe.
* **How to Fix:**
  1. Validate `const isValidVideoId = /^[a-zA-Z0-9_-]{11}$/.test(id);` before calling `getVideoById(id)` or rendering the `<iframe>`.
  2. Render an error/fallback state when `id` is invalid (and optionally use `https://www.youtube-nocookie.com/embed/${id}`).

---

### VULN-09: Upstream API & Exception Error Disclosure in YouTube Route Handlers
* **Severity:** **Low**
* **Locations:**
  * `src/app/api/youtube/search/route.ts` (Lines 35–43, 72–76)
  * `src/app/api/youtube/video/route.ts` (Lines 35–43, 73–77)
* **Verified Behavior:** Non-OK responses from Google's API forward `errorData?.error?.message` directly in JSON responses, and unexpected runtime failures forward `error?.message`.
* **How to Fix:**
  1. Log upstream status/error bodies and exceptions on the server.
  2. Return sanitized client-facing messages (e.g., `"Video service temporarily unavailable"` or `"Internal server error"`) while preserving Next.js prerender interrupt rethrows (`error?.digest === "NEXT_PRERENDER_INTERRUPTED" || error?.digest?.startsWith?.("NEXT_")`).

---

## Safe Remediation Sequence for Implementing Agents

1. **Secrets & Client Fallback Cleanup (`VULN-03`, `VULN-08`, `VULN-09`):**
   * Remove `NEXT_PUBLIC_YOUTUBE_API_KEY` and direct `googleapis.com` browser fetches in `src/lib/youtube.ts`; rotate key in Google Cloud Console.
   * Keep `YouTubeVideo` mapping + `NEXT_PRERENDER_INTERRUPTED` rethrow in `/api/youtube/*`, validate `id` (`/^[a-zA-Z0-9_-]{11}$/`) and `q` length (`1..100`), and sanitize returned error JSON.
2. **Server Session Auth, Redirect Validation & Next.js 16 Proxy (`VULN-02`, `VULN-04`, `VULN-05`, `VULN-07`):**
   * Add `firebase-admin` and implement `/api/auth/session` + `/api/auth/logout` (`HttpOnly`, `SameSite=Lax`, `Secure` in prod, `email_verified` enforced, `revokeRefreshTokens` on logout).
   * Provision `{ admin: true }` custom claims on admin users, remove hardcoded `"durjoybarua1971@gmail.com"` / `emailVerified` bypasses from client code, and sanitize `?from=` redirects in `login/page.tsx` and `AdminLogin/page.tsx`.
   * Verify the signed session cookie inside **`src/proxy.ts`** (keeping Next.js 16 `proxy` file/export convention) and enforce session auth + rate limiting on `/api/youtube/*`.
3. **Server Admin Mutations & Firestore Rules (`VULN-01`):**
   * Move `SkillList` and `kidList` writes (`AddSkill`, `UpdateSkill`, `AddKidsCorner`, `UpdateKidCorner`) behind authenticated admin Route Handlers verifying `decoded.admin === true`, OR ensure custom claims are assigned before locking down `firestore.rules`.
   * Commit and deploy `firestore.rules`.
4. **Security Headers (`VULN-06`):**
   * Add `async headers()` to `next.config.ts` without removing existing `images`, `cacheComponents`, `partialPrefetching`, `redirects`, or `turbopack` settings, and run `npm run build` + `npm run lint` to verify compatibility.
