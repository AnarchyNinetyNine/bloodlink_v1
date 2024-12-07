import React from "react";
import Menu from "@/components/navigation_menu/menu";
import { headers } from "next/headers";
import { ThemeSwitcherButton } from "@/components/themeModes/ThemeSwitcherBtn";
import { LogoutButton } from "@/components/buttons/logoutButton";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import { toast, Toaster } from 'react-hot-toast';

export default async function FloatingDockDemo() {

  // calling get session on the server
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return redirect('/donor/account/sign-up')
  }

  const user = session?.user;
  
  return (
<div className="relative flex flex-col min-h-screen">

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: { background: '#363636', color: '#fff', textAlign: 'center' },
          success: { duration: 3000 },
        }}
      />

      {/* Dark Mode Button */}
      <div className="absolute top-4 right-4 flex items-center justify-center gap-4">
        <ThemeSwitcherButton />
        <LogoutButton />
      </div>

      {/* Welcome Message */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold">
            Welcome, {user?.name || 'Guest'}
          </h1>
        </div>
      </div>

      {/* FloatingDock */}
      <div className="relative flex flex-col items-center justify-end p-4">
        <Menu />
      </div>

    </div>
  );
}


