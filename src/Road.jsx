
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Road(props) {
    const { nodes, materials } = useGLTF("/road.glb");
    return (
        <group  {...props} dispose={null}>
            <group position={[-0.244, 0, 0.876]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Road}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.RoadCenterMark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.Pavement}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/road.glb");