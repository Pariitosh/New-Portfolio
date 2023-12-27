import {Box, Circle, RoundedBox, Sphere, Tube, useTexture} from "@react-three/drei";
import {RigidBody} from "@react-three/rapier";

export default function Skills(){
    const java=useTexture('/SkillLogos/java.png')
    const python=useTexture('/SkillLogos/python.png')
    const html=useTexture('/SkillLogos/html.png')
    const css=useTexture('/SkillLogos/css.png')
    const javascript=useTexture('/SkillLogos/javascript.png')
    const react=useTexture('/SkillLogos/react.png')
    const mongodb=useTexture('/SkillLogos/mongodb.png')
    const express=useTexture('/SkillLogos/express.png')
    const threejs=useTexture('/SkillLogos/threejs.webp')
    const nextjs=useTexture('/SkillLogos/nextjs.png')
    const blender=useTexture('/SkillLogos/blender.png')
    return(
        <>
        <RigidBody>
        <RoundedBox scale={[1,1,1]} position={[16.5,5,-50]}>
            <meshStandardMaterial map={java} />
        </RoundedBox>
        </RigidBody>
        <RigidBody>
        <RoundedBox scale={[1,1,1]} position={[15,5,-50]}>
            <meshStandardMaterial map={python} />
        </RoundedBox>
        </RigidBody>
        <RoundedBox scale={[1,1,1]} position={[13.5,5,-50]}>
            <meshStandardMaterial map={html} />
        </RoundedBox>
        <RoundedBox scale={[1,1,1]} position={[12,5,-50]}>
            <meshStandardMaterial map={css} />
        </RoundedBox>
        <RoundedBox scale={[1,1,1]} position={[10.5,5,-50]}>
            <meshStandardMaterial map={javascript} />
        </RoundedBox>
        <RoundedBox scale={[1,1,1]} position={[9,5,-50]}>
            <meshStandardMaterial map={react} />
        </RoundedBox>
        <RoundedBox scale={[1,1,1]} position={[7.5,5,-50]}>
            <meshStandardMaterial map={mongodb} />
        </RoundedBox>
        <RoundedBox scale={[1,1,1]} position={[6,5,-50]}>
            <meshStandardMaterial map={express} />
        </RoundedBox>
        <RoundedBox scale={[1,1,1]} position={[4.5,5,-50]}>
            <meshStandardMaterial map={threejs} />
        </RoundedBox>
        
        <RoundedBox scale={[1,1,1]} position={[3,5,-50]}>
            <meshStandardMaterial map={nextjs} />
        </RoundedBox>
        <RigidBody>
        <RoundedBox scale={[1,1,1]} position={[1.5,5,-50]}>
            <meshStandardMaterial map={blender} />
        </RoundedBox>
        </RigidBody>
        </>
    )
}

