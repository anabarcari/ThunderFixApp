import React, { Suspense, useEffect, useState } from "react";
import { Canvas as R3FCanvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import THREE directly

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const scaleFactor = isMobile ? [0.15, 0.15, 0.15] : [3, 3, 3];


  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[5, 5, 5]} />
      <hemisphereLight intensity={5} skyColor="white" />
      
      <spotLight
        position={[60, 50, 10]}
        angle={Math.PI }
        penumbra={10}
        intensity={3}
        castShadow // Enable shadow casting for the spotLight
        shadow-mapSize={{ width: 1020, height: 1024 }}
      />
      <pointLight intensity={35} />

      <primitive
        object={computer.scene}
        scale={scaleFactor}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0, 0]}
        receiveShadow // Enable shadow receiving for the primitive
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <R3FCanvas
      frameloop="demand"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </R3FCanvas>
  );
};

export default ComputersCanvas;
