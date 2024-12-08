"use client";

import React, { useState } from "react";
import { FloatingDock } from "./floating-dock";
import { toast } from "react-hot-toast";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconLogout,
  IconSettings2
} from "@tabler/icons-react";
import Image from "next/image";

export default function Menu() {
    const links = [
      {
        title: "Home",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/dashboard",
      },
  
      {
        title: "Products",
        icon: (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Components",
        icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "Aceternity UI",
        icon: (
          <Image
            src="https://assets.aceternity.com/logo-dark.png"
            width={20}
            height={20}
            alt="Aceternity Logo"
          />
        ),
        href: "#",
      },
      {
        title: "Changelog",
        icon: (
          <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
  
      {
        title: "Settings",
        icon: (
          <IconSettings2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "SignOut",
        icon: (
          <IconLogout
            stroke={2}
            className="h-full w-full text-neutral-500 dark:text-neutral-300"
          />
        ),
        href: "/donor/account/sign-in",
        onClick: async () => {
          try {

            let toastId: string | undefined = undefined;
            // Display loading toast if not already displayed

            if (!toastId) {
              toastId = toast.loading('Processing your registration...');
            } else {
              toast.dismiss(toastId);
              toastId = toast.loading('Processing your registration...');
            }

            const response = await fetch("/api/auth/sign-out", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
 
            if (response.ok) {
              localStorage.removeItem("accessToken");
              toast.success('Bye Bye! See you soon!', {
                id: toastId,
                icon: '👋',
              });
              setTimeout(() => (window.location.href = '/donor/account/sign-in'), 3000);
            } else {
              toast.error("Logout failed. Please try again.");
            }
          } catch (error) {
            console.error("Logout failed", error);
              toast.error("Logout failed. Please try again.");
          }
        },
      },
  ];

  return ( 
      <div className="flex flex-col items-center justify-end p-4">
  
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </div>
    );
  }


  