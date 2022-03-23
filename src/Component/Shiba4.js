import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Shiba4({ ...props }) {
  const group = useRef();
  useFrame((state) => {
    if (props.show3D) {
      group.current.rotation.y += 0.002;
    }
  });
  const { nodes, materials } = useGLTF("/shiba4.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                  <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      geometry={nodes.Object_13.geometry}
                      material={materials.Cuerpo}
                    />
                  </group>
                  <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      geometry={nodes.Object_17.geometry}
                      material={materials.collar}
                    />
                  </group>
                  <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      geometry={nodes.Object_21.geometry}
                      material={materials.Ojos}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shiba4.gltf");
