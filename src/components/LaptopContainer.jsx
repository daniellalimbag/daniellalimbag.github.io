import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { Model } from "./Laptop";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ResponsiveLaptop = () => {
  const { size } = useThree();
  const scale = useMemo(() => {
    if (size.width < 500) return 5;
    if (size.width < 900) return 6;
    return 6;
  }, [size.width]);
  return <Model scale={scale} />;
};

const LaptopContainer = () => {
  return (
    <Canvas className="w-full h-full">
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ResponsiveLaptop />
        <OrbitControls enableZoom={false} autoRotate enablePan={false} enableRotate={true} />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default LaptopContainer;
