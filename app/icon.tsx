import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fefcf8",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontWeight: 900,
            fontSize: 56,
            color: "#c35a54",
            lineHeight: 1,
          }}
        >
          B
        </span>
      </div>
    ),
    size
  );
}
