"use client";

import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  }, []);

  return null;
}
