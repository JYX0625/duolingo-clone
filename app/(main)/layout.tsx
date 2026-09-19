import type { PropsWithChildren } from "react";
import { currentUser } from "@clerk/nextjs/server"; // 1. 引入 Clerk 服务端方法

import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

// 2. 加上 async 关键字
const MainLayout = async ({ children }: PropsWithChildren) => {
  // 3. 获取当前用户
  const user = await currentUser();
  
  // 4. 判断是否是管理员（注意环境变量可能含有多个管理员，用逗号隔开）
  const adminIds = process.env.CLERK_ADMIN_IDS?.split(",").map(id => id.trim()) || [];
  const isAdmin = user ? adminIds.includes(user.id) : false;

  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" isAdmin={isAdmin} />
      <MobileBottomNav isAdmin={isAdmin} />
      <main className="h-full pb-[calc(68px+env(safe-area-inset-bottom))] pt-[50px] lg:pb-0 lg:pl-[256px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;