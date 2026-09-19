"use client";

import { useState, type ComponentType } from "react";

import {
  BookMarked,
  BookOpen,
  CircleHelp,
  Layers,
  List,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useResourceDefinitions, useRedirect } from "react-admin";
import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const RESOURCE_ORDER = [
  "courses",
  "units",
  "lessons",
  "challenges",
  "challengeOptions",
] as const;

const RESOURCE_LABELS: Record<string, string> = {
  courses: "Courses",
  units: "Units",
  lessons: "Lessons",
  challenges: "Challenges",
  challengeOptions: "Challenge Options",
};

const RESOURCE_ICONS: Record<
  string,
  ComponentType<{ className?: string }>
> = {
  courses: BookOpen,
  units: Layers,
  lessons: BookMarked,
  challenges: CircleHelp,
  challengeOptions: List,
};

export const MobileAdminDrawer = () => {
  const [open, setOpen] = useState(false);
  const resources = useResourceDefinitions();
  const redirect = useRedirect();
  const location = useLocation();

  const currentResource = location.pathname.split("/").filter(Boolean)[0] ?? "";
  const resourceNames = RESOURCE_ORDER.filter((name) => resources[name]);

  const handleNavigate = (name: string) => {
    redirect("list", name);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open admin menu"
        onClick={() => setOpen(true)}
        className="fixed left-0 top-0 z-[60] flex h-[50px] w-[50px] items-center justify-center lg:hidden"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      <Sheet modal={false} open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="z-[100] w-[280px] p-0">
          <SheetTitle className="sr-only">Admin menu</SheetTitle>

          <div className="flex h-full flex-col border-r-2 px-4">
            <Link
              href="/learn"
              prefetch
              onClick={() => setOpen(false)}
              className="flex items-center gap-x-3 pb-7 pl-4 pt-8"
            >
              <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
              <span className="text-2xl font-extrabold tracking-wide text-green-600">
                Lingo
              </span>
            </Link>

            <div className="flex flex-1 flex-col gap-y-2">
              {resourceNames.map((name) => {
                const isActive = currentResource === name;
                const Icon = RESOURCE_ICONS[name] ?? BookOpen;
                const label =
                  resources[name]?.options?.label ??
                  RESOURCE_LABELS[name] ??
                  name;

                return (
                  <Button
                    key={name}
                    variant={isActive ? "sidebarOutline" : "sidebar"}
                    className="h-[52px] justify-start"
                    onClick={() => handleNavigate(name)}
                  >
                    <Icon
                      className={cn(
                        "mr-5 h-8 w-8",
                        isActive ? "text-sky-500" : "text-slate-500"
                      )}
                    />
                    {label}
                  </Button>
                );
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
