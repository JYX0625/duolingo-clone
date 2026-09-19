"use client";

import { useEffect } from "react";

export const AdminMobileFormFix = () => {
  useEffect(() => {
    const unlockBody = () => {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
      document.body.removeAttribute("data-scroll-locked");
    };

    unlockBody();

    const handleFocusIn = (event: FocusEvent) => {
      unlockBody();

      const target = event.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        target.readOnly = false;

        window.setTimeout(() => {
          target.scrollIntoView({ block: "center", behavior: "smooth" });
        }, 300);
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    const intervalId = window.setInterval(unlockBody, 1000);

    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      window.clearInterval(intervalId);
      unlockBody();
    };
  }, []);

  return null;
};
