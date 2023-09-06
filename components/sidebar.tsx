"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Genaration",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Genaration",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Genaration",
    icon: Music,
    href: "/music",
    color: "text-red-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-lime-600",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-8">
            <Image fill src="/logo.png" alt="logo" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Quantum
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <>
              {route.label === "Settings" && (
                <Separator className="bg-gray-500" />
              )}
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                  pathname === route.href
                    ? "bg-white/10 text-white"
                    : "text-zinc-400",
                )}
              >
                <div className="flex flex-1 items-center">
                  <route.icon className={cn("mr-3 h-5 w-5", route.color)} />
                  {route.label}
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
