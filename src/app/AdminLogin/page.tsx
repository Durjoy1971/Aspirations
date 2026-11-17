"use client";

import React, { useState, useContext, useEffect, Suspense } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/lib/firebase";
import { UserContext } from "@/context/UserContext";
import { toast } from "sonner";

function AdminLoginForm() {
  const { dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Admin | Aspiration";
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "durjoybarua1971@gmail.com";
        if (email === adminEmail) {
          document.cookie = "admin_auth=true; path=/; max-age=86400; SameSite=Lax";
          document.cookie = "user_auth=true; path=/; max-age=86400; SameSite=Lax";
          toast.success("Admin login successful");
          dispatch({
            type: "LOGIN",
            payload: {
              userName: userCredential.user.displayName || "ASPIRANT",
              email: userCredential.user.email || "",
            },
          });
          const from = searchParams.get("from");
          router.push(from || "/");
        } else {
          signOut(auth).then(() => {
            document.cookie = "admin_auth=; path=/; max-age=0; SameSite=Lax";
            document.cookie = "user_auth=; path=/; max-age=0; SameSite=Lax";
            dispatch({ type: "LOGOUT" });
            toast.error("You are not an Admin");
          });
        }
      })
      .catch((error) => {
        toast.error(error.message || "Admin login failed");
        console.error(error);
      });
  };

  return (
    <div className="pt-[140px] pb-[100px] flex justify-center items-center min-h-[70vh]">
      {/* Login box */}
      <div className="w-[380px] sm:w-[420px] bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-100">
        <h2 className="text-black font-semibold text-center text-[28px] mb-8">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="peer w-full h-[50px] bg-transparent border-2 border-purple-800 rounded-full text-base text-purple-900 px-5 outline-none focus:border-yellow-600 transition-colors"
            />
            <label className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-700 font-bold text-base pointer-events-none transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-teal-700 peer-focus:text-yellow-300 peer-focus:px-2 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-teal-700 peer-[:not(:placeholder-shown)]:text-yellow-300 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="peer w-full h-[50px] bg-transparent border-2 border-purple-800 rounded-full text-base text-purple-900 px-5 outline-none focus:border-yellow-600 transition-colors"
            />
            <label className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-700 font-bold text-base pointer-events-none transition-all duration-300 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-teal-700 peer-focus:text-yellow-300 peer-focus:px-2 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-teal-700 peer-[:not(:placeholder-shown)]:text-yellow-300 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-[45px] bg-[#02ebfc] hover:bg-[#00c8d8] text-black font-bold rounded-full text-[18px] transition-colors cursor-pointer border-none shadow-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-[140px] pb-[100px] flex justify-center items-center min-h-[70vh]">
          <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
