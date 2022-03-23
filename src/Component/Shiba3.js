import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Shiba3({ ...props }) {
  const group = useRef();
  useFrame((state) => {
    if (props.show3D) {
      group.current.rotation.y += 0.002;
    }
  });
  const { nodes, materials } = useGLTF("/shiba3.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Shiba_Shiba_0.geometry}
              material={materials.Shiba}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shiba3.gltf");
