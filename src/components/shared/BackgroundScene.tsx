import GradientBlinds from "@/components/background/GradientBlinds";
import LightRays from "@/components/background/LightRays";
import PixelBlast from "@/components/background/PixelBlast";
import SplashCursor from "@/components/SplashCursor";

export function BackgroundScene() {
  return (
    <div className="size-full relative">
      {/* Global PixelBlast Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
        <GradientBlinds
          gradientColors={["#f96b16", "#3B82F6"]}
          angle={20}
          noise={0.5}
          blindCount={16}
          blindMinWidth={60}
          mouseDampening={0.15}
          mirrorGradient={false}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          distortAmount={0}
          shineDirection="left"
        />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#22d3ee"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#fcddc0"
          patternScale={1.5}
          patternDensity={0.4}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.15}
          rippleIntensityScale={0.6}
          speed={0.02}
          transparent
          edgeFade={0.4}
        />
      </div>{" "}
      {/* <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      /> */}
    </div>
  );
}
