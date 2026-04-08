export default function AppStoreBadge() {
  return (
    <div
      className="relative overflow-hidden shrink-0"
      style={{ width: "120px", height: "40px" }}
      aria-label="Download on the App Store"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/app-store-badge.svg" alt="" className="absolute inset-0 w-full h-full" style={{ maxWidth: "none" }} />
      <div className="absolute" style={{ inset: "21.8% 76.86% 23.76% 8.33%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/app-store-apple-logo.svg" alt="" className="absolute inset-0 w-full h-full" style={{ maxWidth: "none" }} />
      </div>
      <div className="absolute" style={{ inset: "44.68% 8.5% 16.27% 28.77%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/app-store-text.svg" alt="" className="absolute inset-0 w-full h-full" style={{ maxWidth: "none" }} />
      </div>
      <div className="absolute" style={{ inset: "21.09% 12.41% 63.01% 29.81%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/app-store-subtext.svg" alt="" className="absolute inset-0 w-full h-full" style={{ maxWidth: "none" }} />
      </div>
    </div>
  );
}
