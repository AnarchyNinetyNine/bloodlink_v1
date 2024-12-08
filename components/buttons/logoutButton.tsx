"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { IconLogout } from "@tabler/icons-react";

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      toast.success("Bye Bye :)", { icon: "👋" });

      const response = await fetch("/api/auth/sign-out", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("accessToken");
        window.location.href = "/donor/account/sign-in";
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="group bg-red-500 relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-neutral-500/10 bg-white px-2 py-1 font-medium text-neutral-600 tracking-tight hover:bg-neutral-100 dark:bg-red-500 dark:text-neutral-300 dark:hover:bg-red-400"
      onClick={handleLogout}
      type="button"
      disabled={isLoading}
    >
      {isLoading ? "Logging out..." : <IconLogout stroke={2} className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />}
    </button>
  );
};

export default LogoutButton;
