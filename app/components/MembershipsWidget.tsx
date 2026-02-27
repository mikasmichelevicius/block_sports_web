"use client";

import { useEffect } from "react";

export default function MembershipsWidget() {
  useEffect(() => {
    let cancelled = false;

    function mount(repeat = 1) {
      if (cancelled || repeat > 50) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (!w.BsportWidget) {
        setTimeout(() => mount(repeat + 1), 100 * repeat || 1);
        return;
      }
      w.BsportWidget.mount({
        parentElement: "bsport-widget-468122",
        companyId: 5529,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "subscription",
        showFab: false,
        fullScreenPopup: false,
        styles: undefined,
        config: {
          subscription: {},
        },
      });
    }

    if (!document.getElementById("bsport-widget-cdn")) {
      const script = document.createElement("script");
      script.id = "bsport-widget-cdn";
      script.src = "https://cdn.bsport.io/scripts/widget.js";
      script.onload = () => { if (!cancelled) mount(); };
      document.head.appendChild(script);
    } else {
      mount();
    }

    return () => {
      cancelled = true;
      const el = document.getElementById("bsport-widget-468122");
      if (el) el.innerHTML = "";
    };
  }, []);

  return (
    <div className="overflow-x-auto">
      <div id="bsport-widget-468122" />
    </div>
  );
}
