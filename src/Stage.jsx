
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/Stage.glb");
  return (
    <group scale={[4,4,4]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["LOGO-white"]}
        position={[0.13, 4.311, -10.121]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group scale={0.025}>
        <group position={[2.275, 91.592, -390.889]} scale={[2.7, 2.7, 0.262]}>
          <mesh
            
            castShadow
            receiveShadow
            geometry={nodes["Object002_Material_#126_0"].geometry}
            material={materials["Stage-Black"]}
            position={[0, 0, -19.685]}
          />
        </group>
        <group
          position={[209.882, 104.836, -335.385]}
          rotation={[0, -0.436, 0]}
          scale={[0.892, 0.73, 0.892]}
          >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object017_Material_#129_0"].geometry}
            material={materials["Stage-Black"]}
            position={[13.484, -40.588, 2.525]}
          />
        </group>
        <group
          position={[-190.195, 104.836, -335.385]}
          rotation={[-Math.PI, -0.436, 0]}
          scale={-1}
          >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object019_Material_#131_0"].geometry}
            material={materials["Stage-Black"]}
            position={[-54.3, -7.614, 33.185]}
          />
        </group>
        <group
          position={[-5.437, 105.538, -23.602]}
          scale={[1.479, 1.479, 0.478]}
          >
          <mesh
            castShadow
            receiveShwhadow
            geometry={nodes["Text001_Stage-white_0"].geometry}
            material={materials["Stage-white"]}
            position={[8.69, 42.603, -779.248]}
          />
        </group>
      </group>
    </group>
    );
}

useGLTF.preload("/Stage.glb");