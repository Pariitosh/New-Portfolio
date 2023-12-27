/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export function Billboard(props) {
  const { nodes, materials } = useGLTF("/billboard.glb");
  return (
    <group scale={[1,2,2.2]} {...props} dispose={null}>
      <mesh
        castShadow={true}
        receiveShadow={true}
        geometry={nodes.Object_4.geometry}
        material={materials.Black}
        position={[-0.55, 11.67, 0]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.895, 0.077, 9.255]}
      />
    </group>
  );
}

useGLTF.preload("/billboard.glb");