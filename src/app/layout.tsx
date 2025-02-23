'use client';
import "./globals.css";
import { CalendarIcon, FolderOpen, HomeIcon, MailIcon, PencilIcon, UserIcon } from "lucide-react";
import React from "react";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { redditSans } from './fonts';

export type IconProps = React.HTMLAttributes<SVGElement>;


const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),

};

const DATA = {
  navbar: [
    { href: "/home", icon: HomeIcon, label: "Home" },
    { href: "/casestudies", icon: FolderOpen, label: "Case Studies" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
    { href: "/about", icon: UserIcon, label: "About Me" }
  ],
  contact: {
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vamsikbatchu",
        icon: Icons.linkedin,
      },
      email: {
        name: "Send Email",
        url: "mailto:vamsibatchuk@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${redditSans.variable}`}>
      <head>
        {/* Add any additional head elements if needed */}
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Navigation on the right */}
       

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}