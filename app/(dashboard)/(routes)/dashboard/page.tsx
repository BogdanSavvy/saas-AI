"use client";

import {
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Genaration",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Video Genaration",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Music Genaration",
    icon: Music,
    href: "/music",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-lime-600",
    bgColor: "bg-lime-600/10",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Explore power of AI
        </h2>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                <tool.icon className={cn("h-8 w-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="h-5 w-5" />
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
