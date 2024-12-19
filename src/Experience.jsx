/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Text, Image, Text3D, Box, useDetectGPU, Sphere} from "@react-three/drei";
import './index.css'
import { useScroll } from "framer-motion";
import { useRef, useState } from "react";
import gsap from "gsap";
import Road from './Road.jsx'
import MainCar from "./MainCar";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Lamps from "./Lamps";
import _ from "lodash";
import RoadEndObstacles from "./RoadEndObstacles.jsx";
import Billboards from "./Images.jsx";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useControls } from "leva";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Experience({buttons, cam, controlcam, isWPressed, isSPressed, place, navbar, tutorial }) {

    const [driveable, setDriveable] = useState(false)
    const line1 = useRef();
    const line2 = useRef();
    const line3 = useRef();
    const CarRef = useRef()
    const [sign1, setSign1] = useState(false)
    const [sign2, setSign2] = useState(false)
    const [started,setStarted]  = useState(true)

    const roadend1 = useRef()
    const roadend2 = useRef()
    const roadend3 = useRef()
    const roadend4 = useRef()
    const [moving, setMoving] = useState(false)
    const b50=useRef()
    const b51=useRef()
    const b52=useRef()
    const b53=useRef()
    const [
         b2, b3, b4, b5, b6, b7, b8, b9, b10,
        b11, b12, b13, b14, b15, b16, b17, b18, b19, b20,
        b21, b22, b23, b24, b25, b26, b27, b28, b29, b30,
        b31, b32, b33, b34, b35, b36, b37, b38, b39, b40,
        b41, b42, b43, b44, b45, b46, b47, b48, b49,
    ] = [...Array(49)].map(() => useRef(null));
    const elements = [
        b2, b3, b4, b5, b6, b7, b8, b9, b10,
        b11, b12, b13, b14, b15, b16, b17, b18, b19, b20,
        b21, b22, b23, b24, b25, b26, b27, b28, b29, b30,
        b31, b32, b33, b34, b35, b36, b37, b38, b39, b40,
        b41, b42, b43, b44, b45, b46, b47, b48, b49, b50,
        b51, b52, b53,
    ];
   
    const dlight=useRef()
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        // for navbar navigation
      
        if (driveable) {
            if (place === 'about') {
                setMoving(true)
                _.delay(() => { setMoving(false) }, 500)
                gsap.to(CarRef.current.position, { z: -100, duration: 0.5 })
                gsap.to(cam.current.position, { z: 90, duration: 0.5 })
                gsap.to(CarRef.current.position, { x: -5 })
                gsap.to(lightOnCar.current.position,{z:-100})
                controlcam.current.setLookAt(17, 8, -10, -10, 8, -10, true)
                controlcam.current.minDistance = cam.current.position.x + 12
                controlcam.current.maxDistance = cam.current.position.x + 30
                

            }
            if (place === 'projects') {
                setMoving(true)
                _.delay(() => { setMoving(false) }, 500)
                gsap.to(CarRef.current.position, { z: -180, duration: 0.5 })
                gsap.to(cam.current.position, { z: 168, duration: 0.5 })
                gsap.to(CarRef.current.position, { x: -5 })
                controlcam.current.setLookAt(17, 8, -10, -10, 8, -10, true)
                controlcam.current.minDistance = cam.current.position.x + 12
                controlcam.current.maxDistance = cam.current.position.x + 30
                gsap.to(lightOnCar.current.position,{z:-180})

            }
            if (place === 'skills') {
                setMoving(true)
                _.delay(() => { setMoving(false) }, 500)
                gsap.to(CarRef.current.position, { z: -260, duration: 0.5 })
                gsap.to(cam.current.position, { z: 248, duration: 0.5 })
                gsap.to(CarRef.current.position, { x: -5 })
                controlcam.current.setLookAt(17, 8, -10, -10, 8, -10, true)
                controlcam.current.minDistance = cam.current.position.x + 12
                controlcam.current.maxDistance = cam.current.position.x + 30
                gsap.to(lightOnCar.current.position,{z:-260})


            }
            if (place === 'connect') {
                setMoving(true)
                _.delay(() => { setMoving(false) }, 500)
                gsap.to(CarRef.current.position, { z: -340, duration: 0.5 })
                gsap.to(cam.current.position, { z: 328, duration: 0.5 })
                gsap.to(CarRef.current.position, { x: -5 })
                controlcam.current.setLookAt(17, 8, -10, -10, 8, -10, true)
                controlcam.current.minDistance = cam.current.position.x + 12
                controlcam.current.maxDistance = cam.current.position.x + 30
                gsap.to(lightOnCar.current.position,{z:-340})


            }
        }
    }, [place])
    


    const enter = () => {
        
        gsap.to(line3.current.position, { x: 10 })
        setStarted(false)
        document.body.style.height='100vh'
        
        gsap.to(dlight.current,{intensity:15,duration:3})
       
        _.delay(()=>{
            elements.forEach((element, index) => {
                gsap.to(element.current.scale, {
                  x: 0.4,
                  y: 0.4,
                  z: 0.4,
                  duration: 0.1,
                  delay: index * 0.05 // Adjust the multiplier to control the delay increment
                });
              });
        },2000)
        
        // clicked on step in 
        // look in front

        //controlcam.current.setLookAt(0, 0, 5, 0, 0, 0, true)
        //controlcam.current.maxDistance = 0
        //controlcam.current.minDistance = 40
        //controlcam.current.minPolarAngle = 90 * (Math.PI / 180)
        //controlcam.current.maxPolarAngle = 90 * (Math.PI / 180)
        //controlcam.current.minAzimuthAngle = 0 * (Math.PI / 180)
        //controlcam.current.maxAzimuthAngle = 5 * (Math.PI / 180)
        //move text       
        // turn on lights
        // move camera
        
        gsap.to(cam.current.position,{z:38,duration: 4, ease: 'power2.in', delay: 5})
        _.delay(() => {
            // show navbar and buttons
            gsap.to(lightOnCar.current,{intensity:4000})
            gsap.to(dlight.current,{intensity:0})
            controlcam.current.setLookAt(8, -1, 0, -15, 5, -30, true)
            setDriveable(true)
            gsap.to(buttons.current, { opacity: 0.7 })
            gsap.to(navbar.current, { y: '14.9dvh', duration: 1 })
            
        }, 9200)
    }
    
    
    const tutorialimg = useRef()
   
    const moveTutBtn = () => {
        if (!tutorial) gsap.to(tutorialimg.current.position, { y: -5 })
    }
    // set cam look at and move car
    const moveAndSetCamera = (lpx, lpy, lpz, tpx, tpy, tpz, mid, minAngle, maxAngle) => {
        moveTutBtn()
        
        lightOnCar.current.position.z-=0.40
        cam.current.position.z += 0.40
        CarRef.current.position.z -= 0.407
        gsap.to(CarRef.current.position, { x: mid, duration: 1 })
        controlcam.current.setLookAt(lpx, lpy, lpz, tpx, tpy, tpz, true)
        controlcam.current.minAzimuthAngle = minAngle * (Math.PI / 180)
        controlcam.current.minAzimuthAngle = maxAngle * (Math.PI / 180)
    }
    const moveAndSetCameraForS = (lpx, lpy, lpz, tpx, tpy, tpz, mid, minAngle, maxAngle) => {
        moveTutBtn()
        lightOnCar.current.position.z+=0.40
        cam.current.position.z -= 0.40
        CarRef.current.position.z += 0.407
        gsap.to(CarRef.current.position, { x: mid, duration: 1 })
        controlcam.current.setLookAt(lpx, lpy, lpz, tpx, tpy, tpz, true)
        controlcam.current.minAzimuthAngle = minAngle * (Math.PI / 180)
        controlcam.current.minAzimuthAngle = maxAngle * (Math.PI / 180)
    }
    useFrame(() => {
        
        if (isWPressed && CarRef.current.position.z < -385 && sign2 === false) { // if car reaches end
            setSign2(true)
            gsap.to(roadend3.current.position, { y: 15, duration: 0.5 })
            gsap.to(roadend4.current.position, { y: 10, duration: 0.5 })
            gsap.to(roadend3.current.position, { y: -2.5, delay: 3 })
            gsap.to(roadend4.current.position, { y: -2.5, delay: 3 })
            _.delay(() => { setSign2(false) }, 3500)
        }
        if (isWPressed && CarRef.current.position.z > -387 && driveable) {

            if (CarRef.current.position.z < -77 && CarRef.current.position.z > -120) { // car at about billboard 
                moveAndSetCamera(17, 8, cam.current.position.z - 100, -10, 10.5, cam.current.position.z - 100, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 55
                controlcam.current.maxDistance = cam.current.position.z - 45
            }
            else if (CarRef.current.position.z < -155 && CarRef.current.position.z > -198) {  // car at projects billboard
                moveAndSetCamera(17, 8, cam.current.position.z - 180, -10, 10.5, cam.current.position.z - 180, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 130
                controlcam.current.maxDistance = cam.current.position.z - 120

            }
            else if (CarRef.current.position.z < -233 && CarRef.current.position.z > -276) {  // car at skills billboard
                moveAndSetCamera(17, 8, cam.current.position.z - 260, -10, 10.5, cam.current.position.z - 260, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 200
                controlcam.current.maxDistance = cam.current.position.z - 190

            }
            else if (CarRef.current.position.z < -311 && CarRef.current.position.z > -354) {  // car at connect billboard
                moveAndSetCamera(17, 8, cam.current.position.z - 340, -10, 10.5, cam.current.position.z - 340, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 280
                controlcam.current.maxDistance = cam.current.position.z - 270

            }
            else { // car not at billboard
                moveAndSetCamera(4, 0, 2, CarRef.current.position.x - 10, CarRef.current.position.y, CarRef.current.position.z, 0, 0, 10)
                controlcam.current.minDistance = cam.current.position.z + 15 //set camera zoom
                controlcam.current.maxDistance = cam.current.position.z + 17
            }


        }
        if (isSPressed && (CarRef.current.position.z > -12) && sign1 === false) {
            setSign1(true)
            gsap.to(roadend1.current.position, { y: 15, duration: 0.5 })
            gsap.to(roadend2.current.position, { y: 13, duration: 0.5 })
            gsap.to(roadend1.current.position, { y: -1, delay: 3 })
            gsap.to(roadend2.current.position, { y: -1, delay: 3 })
            _.delay(() => { setSign1(false) }, 3500)
        }
        if (isSPressed && CarRef.current.position.z < -10 && driveable) {
            if (CarRef.current.position.z < -81 && CarRef.current.position.z > -120) {
                moveAndSetCameraForS(17, 8, cam.current.position.z - 100, -10, 10.5, cam.current.position.z - 100, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 55
                controlcam.current.maxDistance = cam.current.position.z - 45
            }
            else if (CarRef.current.position.z < -159 && CarRef.current.position.z > -198) {
                moveAndSetCameraForS(17, 8, cam.current.position.z - 180, -10, 10.5, cam.current.position.z - 180, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 130
                controlcam.current.maxDistance = cam.current.position.z - 120
            }
            else if (CarRef.current.position.z < -237 && CarRef.current.position.z > -276) {
                moveAndSetCameraForS(17, 8, cam.current.position.z - 260, -10, 10.5, cam.current.position.z - 260, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 200
                controlcam.current.maxDistance = cam.current.position.z - 190
            }
            else if (CarRef.current.position.z < -315 && CarRef.current.position.z > -354) {
                moveAndSetCameraForS(17, 8, cam.current.position.z - 340, -10, 10.5, cam.current.position.z - 340, -5, 0, 90)
                controlcam.current.minDistance = cam.current.position.z - 280
                controlcam.current.maxDistance = cam.current.position.z - 2270
            }
            else {
                moveAndSetCameraForS(4, 0, 2, CarRef.current.position.x - 10, CarRef.current.position.y, CarRef.current.position.z, 0, 0, 10)
                controlcam.current.minDistance = cam.current.position.z + 15
                controlcam.current.maxDistance = cam.current.position.z + 17
            }
        }
    })
    // const enterHover = () => {
    //     document.body.style.cursor = "pointer"
    //     gsap.to(line3.current.scale, { x: 1.2 })
    //     gsap.to(line3.current.scale, { y: 1.2 })
    //     gsap.to(line3.current.scale, { z: 1.2 })
    // }
    // const enterLeave = () => {
    //     document.body.style.cursor = "auto"
    //     gsap.to(line3.current.scale, { x: 1 })
    //     gsap.to(line3.current.scale, { y: 1 })
    //     gsap.to(line3.current.scale, { z: 1 })
    // }
    const GPUTier = useDetectGPU()
   
      const lightOnCar=useRef()
    //<Box position={[-10,15.7,-340]} scale={[0.1,8.6,11.5]}  onClick={()=>window.open('https://www.linkedin.com/in/paritosh-sagar-22b738273/')} visible={false}></Box>
    //<Box position={[-10,15.5,-353]} scale={[0.1,9.4,10]}  onClick={()=>window.open('https://github.com/Pariitosh')} visible={false}></Box>
    return (
        <>


            {started && <>
            <Text color={'white'} font={'Tangerine-Bold.ttf'} fontSize={1.8} position={[0, 9.3, 149]} ref={line1}>Greetings! I'm Paritosh</Text>
            <Text color={'white'} font={'Tangerine-Bold.ttf'} fontSize={1.7} position={[0, 7.2, 149]} ref={line2} >Welcome to my portfolio</Text>
            <Text onClick={enter} color={'white'} font={'Tangerine-Bold.ttf'} fontSize={1.7} position={[0, 5, 149]} ref={line3} >Click here to explore</Text>
            </>}
            <Box visible={false}  position={[0, 7.5, 151.5]} rotation={[60 * (Math.PI / 180), 0, 0]} scale={[5.5, 1.7, 0.1]} />
            <Text font="Brie.otf" ref={roadend1} position={[-10, -1, -14]} scale={[2, 2, 2]} rotation={[0, 80 * (Math.PI / 180), 0]}>The road behind is closed! </Text>
            <Text font="Brie.otf" ref={roadend2} position={[-10, -1, -14]} scale={[2, 2, 2]} rotation={[0, 80 * (Math.PI / 180), 0]}>Time to go forward. </Text>

            <Text font="Brie.otf" ref={roadend3} scale={[4, 4, 4]} position={[0, -2.5, -400]}>Whoa, careful! You've hit the end</Text>
            <Text font="Brie.otf" ref={roadend4} scale={[3, 3, 3]} position={[0, -2.5, -400]}>Time to hit reverse!</Text>

            <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -150]}>
                <circleGeometry args={[400, 400]}></circleGeometry>
                <meshStandardMaterial color="black" />
            </mesh>

            {/*<Skills / >*/}
            <Road scale={[3.5, 1, 15]} position={[0, 0.1, -65]} />
            <Road scale={[3.5, 1, 15]} position={[0, 0.1, -250]} />
            <MainCar moving={moving} w={isWPressed} s={isSPressed} car={CarRef}
                position={[0, 0, -50]} ref={CarRef} rotation={[0, -110 * (Math.PI / 180), 0]}

            />
            <EffectComposer enabled={GPUTier.fps > 30 ? true : false} depthBuffer={true} disableNormalPass={false} stencilBuffer={false} autoClear={true}>
                <Bloom mipmapBlur intensity={0.02} luminanceThreshold={1} ></Bloom>
            </EffectComposer>

            <Text3D position={[-11, 24, -87]} scale={[6, 5, 4]} rotation={[0, 90 * (Math.PI / 180), 0]} font={'Montserrat Light_Italic.json'}>About<meshBasicMaterial toneMapped={true} color={[255, 255, 255]} reflectivity={0} /></Text3D>
            <Text3D position={[-11, 25, -155]} scale={[4, 4, 4]} rotation={[0, 90 * (Math.PI / 180), 0]} font={'Inter_Regular.json'}>Past work/Projects<meshBasicMaterial toneMapped={true} color={[255, 255, 255]} reflectivity={0} /></Text3D>
            <Text3D position={[-11, 24.1, -250]} scale={[6, 5, 4]} rotation={[0, 90 * (Math.PI / 180), 0]} font={'Montserrat Light_Italic.json'}>Skills<meshBasicMaterial toneMapped={true} color={[255, 255, 255]} reflectivity={0} /></Text3D>
            <Text3D position={[-11, 24.5, -322]} scale={[6, 5, 4]} rotation={[0, 90 * (Math.PI / 180), 0]} font={'Montserrat Light_Italic.json'}>Connect<meshBasicMaterial toneMapped={true} color={[255, 255, 255]} reflectivity={0} /></Text3D>
            
            <directionalLight ref={dlight} intensity={0} position={[1,26,141]} castShadow color={'white'} />
            
            {/* <directionalLight position={[0,10,142]} intensity={10}/> */}
            <ambientLight intensity={0}/>
            <pointLight ref={lightOnCar} position={[-3,10,-50]} intensity={0}/>
            <>
            <Sphere scale={[0, 0, 0]} ref={b2} position={[-11, 10, 139]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b3} position={[11, 10, 139]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b4} position={[-11, 10, 133]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b5} position={[11, 10, 133]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b6} position={[-11, 10, 126]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b7} position={[11, 10, 126]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b8} position={[-11, 10, 119]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b9} position={[11, 10, 119]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b10} position={[-11, 10, 112]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b11} position={[11, 10, 112]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b12} position={[-11, 10, 105]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b13} position={[11, 10, 105]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b14} position={[-11, 10, 98]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b15} position={[11, 10, 98]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b16} position={[-11, 10, 91]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b17} position={[11, 10, 91]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b18} position={[-11, 10, 84]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b19} position={[11, 10, 84]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b20} position={[-11, 10, 77]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b21} position={[11, 10, 77]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b22} position={[-11, 10, 70]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b23} position={[11, 10, 70]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b24} position={[-11, 10, 63]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b25} position={[11, 10, 63]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b26} position={[-11, 10, 56]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b27} position={[11, 10, 56]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b28} position={[-11, 10, 49]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b29} position={[11, 10, 49]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b30} position={[-11, 10, 42]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b31} position={[11, 10, 42]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b32} position={[-11, 10, 35]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b33} position={[11, 10, 35]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b34} position={[-11, 10, 28]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b35} position={[11, 10, 28]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b36} position={[-11, 10, 21]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b37} position={[11, 10, 21]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b38} position={[-11, 10, 14]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b39} position={[11, 10, 14]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b40} position={[-11, 10, 7]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b41} position={[11, 10, 7]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b42} position={[-11, 10, 0]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b43} position={[11, 10, 0]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b44} position={[-11, 10, -7]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b45} position={[11, 10, -7]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b46} position={[-11, 10, -14]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b47} position={[11, 10, -14]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b48} position={[-11, 10, -21]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b49} position={[11, 10, -21]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b50} position={[-11, 10, -28]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b51} position={[11, 10, -28]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b52} position={[-11, 10, -35]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            <Sphere scale={[0, 0, 0]} ref={b53} position={[11, 10, -35]}><meshBasicMaterial reflectivity={0} color={[255, 255, 255]} toneMapped={true} /></Sphere>
            </>
            <Lamps />
            <Billboards />
            <RoadEndObstacles />
            {!navigator.maxTouchPoints > 0 && <Image ref={tutorialimg} url='Frame 16.png' scale={[15, 5, 1]} position={[-10, 10, -50]} rotation={[0, 50 * (Math.PI / 180), 0]} />}
            {/* <Buildings scale={[3,4,2]} position={[-600,-4,0]}/>
            <Buildings scale={[3,4,2]} position={[-600,-4,-300]}/>
            <Buildings scale={[3,4,2]} position={[-600,-4,-800]}/>
            <Buildings scale={[3,4,2]} position={[1000,-4,0]}/>
            <Buildings scale={[3,4,2]} position={[1000,-4,-300]}/>
            <Buildings scale={[3,4,2]} position={[1000,-4,-600]}/> */}









            
        </>
    );
}
