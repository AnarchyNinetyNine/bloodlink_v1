import React from "react";
import Menu from "@/components/navigation_menu/menu";
import { cookies } from "next/headers";
import { ThemeSwitcherButton } from "@/components/themeModes/ThemeSwitcherBtn";
import LogoutButton from "@/components/buttons/logoutButton";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import prisma from '@/utils/prisma';


const JWT_SECRET = process.env.JWT_SECRET as string;

export default async function FloatingDockDemo() {
  // Retrieve the token from cookies
  const getTokenFromCookies = async () => {
    const cookieStore = await cookies();
    return cookieStore.get("accessToken")?.value;
  };

  // Function to verify the JWT token and return the decoded user data
  const verifyToken = (token: string) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      console.error("Invalid token:", err);
      throw new Error("Invalid token");
    }
  };

  // Function to retrieve user details from Prisma by email
  const getUserFromPrisma = async (email: string) => {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { fullName: true }, // Only select fullName to reduce unnecessary data
    });
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return user;
  };

  // Function to retrieve the fullName of the user from the token
  const getUserFullName = async (token: string) => {
    // Verify the token and extract user data
    const decoded: any = verifyToken(token);
  
    // Retrieve user from Prisma using the email from the token
    const user = await getUserFromPrisma(decoded.email);
  
    return user.fullName;
  };

  // Retrieve the token from cookies
  const token = await getTokenFromCookies();

  // If no token, redirect to sign-up page
  if (!token) {
    return redirect("/donor/account/sign-up");
  }

  try {
    // Retrieve user fullName from the token
    const fullName = await getUserFullName(token);

    return (
      <div className="relative flex flex-col min-h-screen">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: { background: "#363636", color: "#fff", textAlign: "center" },
            success: { duration: 3000 },
          }}
        />

        {/* Dark Mode Button */}
        <div className="absolute top-4 right-4 flex items-center justify-center gap-4">
          <ThemeSwitcherButton />
          <LogoutButton />
        </div>

        {/* Welcome Message */}
        <div className="flex-grow flex items-center justify-center mt-16">
        <div className="text-center">
          <h1 className="text-xl font-bold">
            Welcome, {fullName || "Guest"}
          </h1>
        </div>
      </div>

        {/* FloatingDock */}
        <div className="relative flex flex-col items-center justify-end p-4">
          <Menu />
        </div>
      </div>
    );
  } catch (err) {
    // Handle any error in the flow, e.g., invalid token or user not found
    console.error("Error:", err);
    return redirect("/donor/account/sign-up");
  }
}
