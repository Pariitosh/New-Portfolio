import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function RoadEnd(props) {
    const { nodes, materials } = useGLTF("/roadend.glb");
    return (
        <group  {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
                <group position={[2356.464, 1.321, 98.95]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_35.geometry}
                        material={materials["Mat.004"]}
                        position={[-2356.464, -1.321, -98.95]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/roadend.glb");