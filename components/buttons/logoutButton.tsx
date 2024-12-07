"use client";

import React from "react";
import { cn } from "@/utils";
import { authClient } from "@/app/(client)/lib/auth-client";
import { toast } from 'react-hot-toast';
import { IconLogout } from '@tabler/icons-react'; // Assuming you're using Tabler Icons

export const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      toast.success('Bye Bye :)', { icon: '👋' });
      await authClient.signOut(); // Trigger sign-out process
      setTimeout(() => (window.location.href = '/donor/account/sign-in'), 3000);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button
      className="group bg-red-500 relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-neutral-500/10 bg-white px-2 py-1 font-medium text-neutral-600 tracking-tight hover:bg-neutral-100 dark:bg-red-500 dark:text-neutral-300 dark:hover:bg-red-400"
      onClick={handleLogout}
      type="button"
    >
      <IconLogout stroke={2} className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
      <span className="relative h-6 w-12">
        <span
          className={cn(
            "absolute top-0 left-0 transition-all duration-500",
            "opacity-100" // Always visible text
          )}
        >
          Logout
        </span>
      </span>
    </button>
  );
};
