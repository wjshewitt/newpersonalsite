"use client";

/** @paper-design/shaders-react@0.0.60 */
import { GrainGradient as GrainGradient1 } from "@paper-design/shaders-react";

interface RailsBottomGrainProps {
  height?: string;
  className?: string;
  scale?: number;
}

export default function RailsBottomGrain({ height = "48vh", className, scale = 2.4 }: RailsBottomGrainProps) {
  return (
    <div
      style={{ marginLeft: "calc(11% + 4px)", marginRight: "calc(11% + 4px)" }}
      aria-hidden
    >
      <GrainGradient1
        colors={["#366857", "#F8F6EE"]}
        colorBack="#00000000"
        speed={0}
        scale={scale}
        rotation={41.5}
        offsetX={0}
        offsetY={0}
        softness={0}
        intensity={0}
        noise={0.06}
        shape="sphere"
        frame={312370.15400009905}
        className={className}
        style={{ width: "100%", height, backgroundColor: "#F8F6EE80" }}
      />
    </div>
  );
}
