"use client";

import type { ReactElement, ReactNode } from "react";

import { DatagridProps, useListContext } from "react-admin";

import { useIsMobile } from "../use-is-mobile";

import { MobileColumn, MobileRecordPanel } from "./mobile-record-panel";

type ResponsiveDatagridProps = DatagridProps & {
  mobileColumns: MobileColumn[];
  desktopView: ReactElement;
};

export const ResponsiveDatagrid = ({
  mobileColumns,
  desktopView,
  rowClick = "edit",
}: ResponsiveDatagridProps) => {
  const isMobile = useIsMobile();
  const { data, isLoading } = useListContext();

  if (isMobile) {
    if (isLoading) return null;

    return (
      <div className="mobile-record-list">
        {data?.map((record) => (
          <MobileRecordPanel
            key={record.id}
            record={record}
            columns={mobileColumns}
            rowClick={rowClick}
          />
        ))}
      </div>
    );
  }

  return desktopView;
};
