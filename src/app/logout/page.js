"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("auth");
    router.replace("/login");
  }, [router]);

  return null; // required so React doesn't complain
}
