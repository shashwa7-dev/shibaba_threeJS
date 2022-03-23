import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Shiba({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shiba.gltf");
  useFrame((state) => {
    if (props.show3D) {
      group.current.rotation.y += 0.002;
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Group18985_default_0.geometry}
              material={nodes.Group18985_default_0.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Box002_default_0.geometry}
              material={nodes.Box002_default_0.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object001_default_0.geometry}
              material={nodes.Object001_default_0.material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shiba.gltf");
