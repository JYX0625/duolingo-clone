"use client";

import type { ReactNode } from "react";

import { useRedirect, useResourceContext } from "react-admin";

export type MobileColumn = {
  label: string;
  render: (record: Record<string, unknown>) => ReactNode;
};

type MobileRecordPanelProps = {
  record: Record<string, unknown>;
  columns: MobileColumn[];
  rowClick?: "edit" | "show" | false;
};

export const MobileRecordPanel = ({
  record,
  columns,
  rowClick = "edit",
}: MobileRecordPanelProps) => {
  const redirect = useRedirect();
  const resource = useResourceContext();

  const handleClick = () => {
    if (!rowClick || !resource || record.id == null) return;

    redirect(rowClick, resource, record.id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mobile-record-panel"
    >
      {columns.map((column) => (
        <div key={column.label} className="mobile-record-panel__row">
          <span className="mobile-record-panel__label">{column.label}</span>
          <span className="mobile-record-panel__value">
            {column.render(record)}
          </span>
        </div>
      ))}
    </button>
  );
};
