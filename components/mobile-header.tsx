import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type MobileHeaderProps = {
  variant?: "default" | "admin";
};

export const MobileHeader = ({ variant = "default" }: MobileHeaderProps) => {
  return (
    <nav
      className={cn(
        "fixed top-0 z-50 flex h-[50px] w-full items-center border-b bg-green-500 px-4 lg:hidden",
        variant === "admin" ? "justify-end pl-14" : "justify-between"
      )}
    >
      {variant === "default" && (
        <Link href="/learn" prefetch className="flex items-center gap-x-2">
          <Image src="/mascot.svg" alt="Mascot" height={32} width={32} />
          <span className="text-xl font-extrabold text-white">Lingo</span>
        </Link>
      )}

      <div>
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-white" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverCard: { pointerEvents: "initial" },
              },
            }}
          />
        </ClerkLoaded>
      </div>
    </nav>
  );
};
