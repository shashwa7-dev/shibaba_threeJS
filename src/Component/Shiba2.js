import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Shiba2({ ...props }) {
  const group = useRef();
  useFrame((state) => {
    if (props.show3D) {
      group.current.rotation.y += 0.002;
    }
  });
  const { nodes, materials } = useGLTF("/shiba2.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-31.04, 83.79, 10.63]} rotation={[Math.PI, 0.64, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
            <mesh
              geometry={nodes.Group18985_default_0_default_0.geometry}
              material={nodes.Group18985_default_0_default_0.material}
            />
            <mesh
              geometry={nodes.Box002_default_0_default_0.geometry}
              material={nodes.Box002_default_0_default_0.material}
            />
            <mesh
              geometry={nodes.Object001_default_0_default_0.geometry}
              material={nodes.Object001_default_0_default_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shiba2.gltf");
