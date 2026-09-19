"use client";

import type { LayoutProps } from "react-admin";
import { AppBar, Layout, TitlePortal } from "react-admin";

import { MobileAdminDrawer } from "./mobile-admin-drawer";

const AdminAppBar = () => {
  return (
    <AppBar sx={{ display: { xs: "none", lg: "block" } }}>
      <TitlePortal />
    </AppBar>
  );
};

export const AdminLayout = (props: LayoutProps) => {
  return (
    <>
      <MobileAdminDrawer />
      <Layout {...props} appBar={AdminAppBar} />
    </>
  );
};
