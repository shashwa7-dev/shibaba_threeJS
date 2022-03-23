import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../Assets/map.jpeg";

export default function Box({ show3D = false }) {
  const colorMap = useLoader(TextureLoader, texture);
  const ref = useRef();

  useFrame((state) => {
    if (show3D) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.x += 0.003;
      ref.current.rotation.y += 0.002;
      ref.current.rotation.z += 0.001;
      ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    }
  });
  return (
    <mesh ref={ref} rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" map={colorMap} />
    </mesh>
  );
}
