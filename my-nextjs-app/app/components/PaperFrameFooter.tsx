"use client";

import dynamic from "next/dynamic";

const PaperGrainGradient = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.GrainGradient),
  { ssr: false }
);

export default function PaperFrameFooter() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none rotate-180">
      <div
        className="box-border border-[5px]"
        style={{
          borderColor: "#366857",
          contain: "content",
          width: "min(1340px, 100vw)",
          height: "min(1117px, 80vh)",
        }}
      >
        <PaperGrainGradient
          colors={["#366857", "#F8F6EE"]}
          colorBack="#00000000"
          speed={0}
          scale={1.59}
          rotation={-139}
          offsetX={0}
          offsetY={-0.21}
          softness={0}
          intensity={0}
          noise={0.06}
          shape="sphere"
          frame={312370.15400009905}
          style={{
            backgroundColor: "#F8F6EE80",
            width: "100%",
            height: "100%",
            opacity: "100%",
          }}
        />
      </div>
    </div>
  );
}
