import type { PropsWithChildren } from "react";

import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { MobileHeader } from "@/components/mobile-header";

import { AdminMobileFormFix } from "./components/admin-mobile-form-fix";
import "./admin.css";

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="admin-root">
      <AdminMobileFormFix />
      <MobileHeader variant="admin" />
      <MobileBottomNav isAdmin />
      <div className="admin-root__content pb-[calc(68px+env(safe-area-inset-bottom))] pt-[50px] lg:pb-0 lg:pt-0">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
