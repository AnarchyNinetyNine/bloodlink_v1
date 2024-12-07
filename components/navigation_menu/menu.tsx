import React from "react";
import { FloatingDock } from "./floating-dock";
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
        title: "Log out",
        icon: (
          <IconLogout stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/",
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


  