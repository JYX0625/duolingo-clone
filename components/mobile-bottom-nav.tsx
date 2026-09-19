"use client";

import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  iconSrc?: string;
  useSettingsIcon?: boolean;
};

const BASE_ITEMS: NavItem[] = [
  { label: "Learn", href: "/learn", iconSrc: "/learn.svg" },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    iconSrc: "/leaderboard.svg",
  },
  { label: "Quests", href: "/quests", iconSrc: "/quests.svg" },
  { label: "Shop", href: "/shop", iconSrc: "/shop.svg" },
];

type MobileBottomNavProps = {
  isAdmin?: boolean;
};

export const MobileBottomNav = ({ isAdmin }: MobileBottomNavProps) => {
  const pathname = usePathname();

  const items = isAdmin
    ? [
        ...BASE_ITEMS,
        { label: "Admin", href: "/admin", useSettingsIcon: true },
      ]
    : BASE_ITEMS;

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t-2 border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="mx-auto flex h-[68px] max-w-lg items-center justify-around px-2">
        {items.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname.startsWith("/admin")
              : pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch
              aria-label={item.label}
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
                isActive && "border-2 border-sky-200 bg-sky-100"
              )}
            >
              {item.useSettingsIcon ? (
                <Settings
                  className={cn(
                    "h-7 w-7",
                    isActive ? "text-sky-500" : "text-slate-500"
                  )}
                />
              ) : (
                <Image
                  src={item.iconSrc!}
                  alt={item.label}
                  width={32}
                  height={32}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
