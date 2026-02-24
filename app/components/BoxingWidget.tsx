"use client";

import { useEffect } from "react";

export default function BoxingWidget() {
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
        parentElement: "bsport-widget-584338",
        companyId: 5529,
        franchiseId: null,
        dialogMode: 1,
        widgetType: "calendar",
        showFab: false,
        fullScreenPopup: true,
        styles: undefined,
        config: {
          calendar: {
            establishments: [18422],
            establishmentGroups: [],
          },
        },
      });
    }

    // Load CDN once; if already loaded, mount immediately
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
      // Clear container so the widget mounts fresh on the next visit
      const el = document.getElementById("bsport-widget-584338");
      if (el) el.innerHTML = "";
    };
  }, []);

  return <div id="bsport-widget-584338" />;
}
