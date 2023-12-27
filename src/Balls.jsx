/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Bloom, EffectComposer, SMAA } from "@react-three/postprocessing";
import {Text, Sphere, Box, MeshReflectorMaterial, Text3D, useDetectGPU, PerformanceMonitor, RoundedBox} from "@react-three/drei";
import { useEffect, useState,useRef } from "react";
import gsap from "gsap";
export default function Balls({move,row1,row2,row3,row4,row5,row6,row7,row8,row9,row10,row11,row12,row13,row14,row15,row16,row17,row18,row19,row20,row21
      ,row22,row23,row24,row25,row26,row27,row28}){
      
    const GPUTier = useDetectGPU()
    const bgbtn=useRef()
    useEffect(()=>{
      if (move && GPUTier.fps>30 ){
            bgbtn.current.position.z+=10
            gsap.to(bgbtn.current.position,{y: -1, duration: 1, ease: "power1.out"})
      }
    },[move])
    return(
        <>
            <EffectComposer
        enabled={GPUTier.fps>30?true:false}
        depthBuffer={true}
        disableNormalPass={false}
        stencilBuffer={false}
        autoClear={true}
      >
        <Bloom mipmapBlur intensity={0.02} luminanceThreshold={1} ></Bloom>
      </EffectComposer>
      {GPUTier.fps>30 && <RoundedBox ref={bgbtn} scale={[7,2,0.01]} position={[0,8,151]} radius={0.30} creaseAngle={0.4} rotation={[60*(Math.PI/180),0,0]}>
            <meshBasicMaterial toneMapped={true} color={[128,0,128]} reflectivity={1} />
      </RoundedBox>}
            <Text3D position={[-11,24,-87]} scale={[6,5,4]} rotation={[0,90*(Math.PI/180),0]} font={'Montserrat Light_Italic.json'}>About
                <meshBasicMaterial toneMapped={true} color={[255,255,255]} reflectivity={0} />
            </Text3D>
            <Text3D position={[-11,25.3,-162.5]} scale={[6,5,4]} rotation={[0,90*(Math.PI/180),0]} font={'Montserrat Light_Italic.json'}>Projects
                <meshBasicMaterial toneMapped={true} color={[255,255,255]} reflectivity={0} />
            </Text3D>
            <Text3D position={[-11,24.1,-250]} scale={[6,5,4]} rotation={[0,90*(Math.PI/180),0]} font={'Montserrat Light_Italic.json'}>Skills
                <meshBasicMaterial toneMapped={true} color={[255,255,255]} reflectivity={0} />
            </Text3D>
            <Text3D position={[-11,24.5,-322]} scale={[6,5,4]} rotation={[0,90*(Math.PI/180),0]} font={'Montserrat Light_Italic.json'}>Connect
                <meshBasicMaterial toneMapped={true} color={[255,255,255]} reflectivity={0} />
            </Text3D>
            {row1 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 119]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 119]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row2 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 112]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 112]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row3 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 105]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 105]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row4 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 98]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 98]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row5 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 91]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 91]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row6 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 84]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 84]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row7 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 77]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 77]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row8 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 70]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 70]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row9 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 63]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 63]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row10 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 56]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 56]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row11 && <>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 49]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 49]}>
                  <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>
            }
            {row12 && <>
      <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 42]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 42]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row13 && <>       <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 35]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 35]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row14 && <>     <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 28]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 28]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row15 && <> <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 21]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 21]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row16 && <> <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 14]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 14]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row17 && <>    <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 7]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 7]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row18 && <>   <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 0]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 0]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row19 && <>  <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, -7]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, -7]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row20 && <>   <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, -14]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, -14]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row21 && <>  <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, -21]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, -21]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row22 && <>  <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, -28]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, -28]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row23 && <>  <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, -35]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, -35]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row24 && <>  <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, -42]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, -42]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row25 && <> <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, -49]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, -49]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row26 && <> <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 126]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 126]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row27 && <> <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 133]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 133]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            {row28 && <> <Sphere scale={[0.4, 0.4, 0.4]}   position={[-11, 10, 139]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere>
            <Sphere scale={[0.4, 0.4, 0.4]}   position={[11, 10, 139]}>
      <meshBasicMaterial reflectivity={0} color={[255,255,255]} toneMapped={true}  />
            </Sphere></>}
            
            
            
            
        </>
    )
}