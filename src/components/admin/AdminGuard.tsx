"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "durjoybarua1971@gmail.com";

interface AdminGuardProps {
  children: React.ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { state } = useUser();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(
    !(state.isLoggedIn && state.email === ADMIN_EMAIL)
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.email !== ADMIN_EMAIL) {
        router.replace("/AdminLogin");
      } else {
        setIsChecking(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const isAuthorized = state.isLoggedIn && state.email === ADMIN_EMAIL;

  useEffect(() => {
    if (!isChecking && !isAuthorized) {
      router.replace("/AdminLogin");
    }
  }, [isChecking, isAuthorized, router]);

  if (isChecking && !isAuthorized) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 font-medium text-sm">Verifying admin access...</p>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
