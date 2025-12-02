"use client";

export default function Logout() {
  localStorage.removeItem("auth");
  window.location.href = "/login";
  return null;
}
