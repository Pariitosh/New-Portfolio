/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef,useRef } from "react";


const MainCar =forwardRef((props,ref)=> {
  const { nodes, materials } = useGLTF("/MainCar.glb");
  const tire1=useRef()
  const tire2=useRef()
  const tire3=useRef()
  const tire4=useRef()
  const rim1=useRef()
  const rim2=useRef()
  const rim3=useRef()
  const rim4=useRef()
  
  useFrame(()=>{
    if (props.moving){
      tire1.current.rotation.x+=0.05
    rim1.current.rotation.x+=0.05
    tire2.current.rotation.x+=0.05
    rim2.current.rotation.x+=0.05
    tire3.current.rotation.x+=0.05
    rim3.current.rotation.x+=0.05
    tire4.current.rotation.x+=0.05
    rim4.current.rotation.x+=0.05

    }
    if (props.w &&props.car.current.position.z>-387){
    tire1.current.rotation.x+=0.05
    rim1.current.rotation.x+=0.05
    tire2.current.rotation.x+=0.05
    rim2.current.rotation.x+=0.05
    tire3.current.rotation.x+=0.05
    rim3.current.rotation.x+=0.05
    tire4.current.rotation.x+=0.05
    rim4.current.rotation.x+=0.05
    }
    if (props.s && props.car.current.position.z<-10){
      tire1.current.rotation.x-=0.05
    rim1.current.rotation.x-=0.05
    tire2.current.rotation.x-=0.05
    rim2.current.rotation.x-=0.05
    tire3.current.rotation.x-=0.05
    rim3.current.rotation.x-=0.05
    tire4.current.rotation.x-=0.05
    rim4.current.rotation.x-=0.05
    }
  })
  return (
    <group ref={ref} scale={[2.5,2.5,2.5]} {...props} dispose={null}>
      <group
        position={[-5.532, 0.017, 1.883]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.001}
      >
        <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[6648.291, 0, -2197.917]}
            rotation={[-Math.PI / 2, 0, -1.257]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SUV_Body_Body_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SUV_Body_Glass_0.geometry}
              material={materials.Glass_7}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.SUV_Body_Optics_0.geometry}
              material={materials.Optics_7}
            />
          </group>
          
          <group position={[5335.828, 420.306, -914.827]} rotation={[-Math.PI / 2, 0, -1.257]}>
            <mesh
            ref={rim4}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E_Body_0.geometry}
              material={materials.Body_7}
            />
            <mesh
            ref={tire4}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E_Wheel_0001.geometry}
              material={materials.Wheel_6}
            />
          </group>
          
          <group position={[8257.968, 420.306, -1864.558]} rotation={[-Math.PI / 2, 0, -1.257]}>
            <mesh
            ref={rim3}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E001_Body_0.geometry}
              material={materials.Body_7}
            />
            <mesh
            ref={tire3}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E001_Wheel_0001.geometry}
              material={materials.Wheel_6}
            />
          </group>
          
          <group position={[4832.26, 420.306, -2464.207]} rotation={[-Math.PI / 2, 0, -1.257]}>
            <mesh
            ref={rim2}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E002_Body_0.geometry}
              material={materials.Body_7}
            />
            <mesh
            ref={tire2}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E002_Wheel_0001.geometry}
              material={materials.Wheel_6}
            />
          </group>
          
          <group position={[7754.399, 420.306, -3413.939]} rotation={[-Math.PI / 2, 0, -1.257]}>
            <mesh
              ref={rim1}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E003_Body_0.geometry}
              material={materials.Body_7}
            />
            <mesh
              ref={tire1}
              castShadow
              receiveShadow
              geometry={nodes.Wheel_E003_Wheel_0001.geometry}
              material={materials.Wheel_6}
            />
          </group>
        </group>
      </group>
    </group>
  );
})
MainCar.displayName="MainCar";
useGLTF.preload("/MainCar.glb");
export default MainCar