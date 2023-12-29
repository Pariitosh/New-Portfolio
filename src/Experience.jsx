/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {Text, Cloud, Image, Text3D, Box, useTexture, Sky, Stars} from "@react-three/drei";
import './index.css'
import {useRef, useState} from "react";
import gsap from "gsap";
import Road from './Road.jsx'
import Balls from "./Balls";
import MainCar from "./MainCar";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import Lamps from "./Lamps";
import { Billboard } from "./Billboard";
import RoadEnd from "./RoadEnd.jsx";
import _ from "lodash";
    export default function Experience({buttons,cam,controlcam,isWPressed,isSPressed,place,navbar,tutorial}) {
    const [driveable,setDriveable]=useState(false)
    const line1 = useRef();
    const line2 = useRef();
    const line3 = useRef();
    const [row1, setrow1] = useState(false)
    const [row2, setrow2] = useState(false)
    const [row3, setrow3] = useState(false)
    const [row4, setrow4] = useState(false)
    const [row5, setrow5] = useState(false)
    const [row6, setrow6] = useState(false)
    const [row7, setrow7] = useState(false)
    const [row8, setrow8] = useState(false)
    const [row9, setrow9] = useState(false)
    const [row10, setrow10] = useState(false)
    const [row11, setrow11] = useState(false)
    const [row12, setrow12] = useState(false)
    const [row13, setrow13] = useState(false)
    const [row14, setrow14] = useState(false)
    const [row15, setrow15] = useState(false)
    const [row16, setrow16] = useState(false)
    const [row17, setrow17] = useState(false)
    const [row18, setrow18] = useState(false)
    const [row19, setrow19] = useState(false)
    const [row20, setrow20] = useState(false)
    const [row21, setrow21] = useState(false)
    const [row22, setrow22] = useState(false)
    const [row23, setrow23] = useState(false)
    const [row26, setrow26] = useState(false)
    const [row27, setrow27] = useState(false)
    const [row28, setrow28] = useState(false)
    const CarRef=useRef()
    const [sign1,setSign1] =useState(false)
    const [sign2,setSign2] =useState(false)

    const roadend1=useRef()
    const roadend2=useRef()
    const roadend3=useRef()
    const roadend4=useRef()
    const [moving,setMoving]=useState(false)
    
    useEffect(()=>{
        // for navbar navigation
        if(driveable){
            if (place==='about')
                {   setMoving(true)
                    _.delay(()=>{setMoving(false)},500)
                    gsap.to(CarRef.current.position,{z:-100,duration:0.5})
                    gsap.to(cam.current.position,{z:90,duration:0.5})
                    gsap.to(CarRef.current.position,{x:-5})
                    controlcam.current.setLookAt(17,8,-10,-10,8,-10,true)
                    controlcam.current.minDistance=cam.current.position.x+12
                    controlcam.current.maxDistance=cam.current.position.x+30
                }
                if (place==='projects')
                {
                    setMoving(true)
                    _.delay(()=>{setMoving(false)},500)
                    gsap.to(CarRef.current.position,{z:-180,duration:0.5})
                    gsap.to(cam.current.position,{z:168,duration:0.5})
                    gsap.to(CarRef.current.position,{x:-5})
                    controlcam.current.setLookAt(17,8,-10,-10,8,-10,true)
                    controlcam.current.minDistance=cam.current.position.x+12
                    controlcam.current.maxDistance=cam.current.position.x+30
                }
                if (place==='skills')
                {
                    setMoving(true)
                    _.delay(()=>{setMoving(false)},500)
                    gsap.to(CarRef.current.position,{z:-260,duration:0.5})
                    gsap.to(cam.current.position,{z:248,duration:0.5})
                    gsap.to(CarRef.current.position,{x:-5})
                    controlcam.current.setLookAt(17,8,-10,-10,8,-10,true)
                    controlcam.current.minDistance=cam.current.position.x+12
                    controlcam.current.maxDistance=cam.current.position.x+30
                }
                if (place==='connect')
                {
                    setMoving(true)
                    _.delay(()=>{setMoving(false)},500)
                    gsap.to(CarRef.current.position,{z:-340,duration:0.5})
                    gsap.to(cam.current.position,{z:328,duration:0.5})
                    gsap.to(CarRef.current.position,{x:-5})
                    controlcam.current.setLookAt(17,8,-10,-10,8,-10,true)
                    controlcam.current.minDistance=cam.current.position.x+12
                    controlcam.current.maxDistance=cam.current.position.x+30
                }  
        }
    },[place])
    useEffect(()=>{
        controlcam.current.setLookAt(0, -2.5,4.5,0,8.5,0,true) //initial camera look at
        
    },[])
    const tutorialimg=useRef()
    const enter = () => {
        // clicked on step in 
        // look in front
        
        controlcam.current.setLookAt(0, 0,5,0,0,0,true)
        controlcam.current.maxDistance=0
        controlcam.current.minDistance=40
        controlcam.current.minPolarAngle=90*(Math.PI/180)
        controlcam.current.maxPolarAngle=90*(Math.PI/180)
        controlcam.current.minAzimuthAngle=0*(Math.PI/180)
        controlcam.current.maxAzimuthAngle=5*(Math.PI/180)   
         //move text
         
        gsap.to(line1.current.position, {y: 10, duration: 1, ease: "power1.out"})
        gsap.to(line2.current.position, {y: 10, duration: 1, ease: "power1.out"})
        gsap.to(line3.current.position, {y: -1, duration: 1, ease: "power1.out"})
        // turn on lights
        _.delay(()=>{setrow28(true)},1200) 
        _.delay(()=>{setrow27(true)},1500)
        _.delay(()=>{setrow26(true)},1800)
        _.delay(()=>{setrow1(true)},2100)
        _.delay(()=>{setrow2(true)},2400)
        _.delay(()=>{setrow3(true)},2600)
        _.delay(()=>{setrow4(true)},2800)
        _.delay(()=>{setrow5(true)},3000)
        _.delay(()=>{setrow6(true)},3100)
        _.delay(()=>{setrow7(true)},3200)
        _.delay(()=>{setrow8(true)},3300)
        _.delay(()=>{setrow9(true)},3350)
        _.delay(()=>{setrow10(true)},3400)
        _.delay(()=>{setrow11(true)},3450)
        _.delay(()=>{setrow12(true)},3500)
        _.delay(()=>{setrow13(true)},3550)
        _.delay(()=>{setrow14(true)},3600)
        _.delay(()=>{setrow15(true)},3650)
        _.delay(()=>{setrow16(true)},3700)
        _.delay(()=>{setrow17(true)},3750)
        _.delay(()=>{setrow18(true)},3800)
        _.delay(()=>{setrow19(true)},3850)
        _.delay(()=>{setrow20(true)},3900)
        _.delay(()=>{setrow21(true)},3950)
        _.delay(()=>{setrow22(true)},4000)
        _.delay(()=>{setrow23(true)},4050)
        
        // move camera
        gsap.to(cam.current.position, {z: 38, duration: 4, ease: 'power2.in',delay:4.1})
        
        _.delay(()=>{
            // show navbar and buttons
            controlcam.current.setLookAt(8, -1,0,-15,5,-30,true)
            setDriveable(true)
            gsap.to(buttons.current, {opacity:0.7})
            gsap.to(navbar.current,{y:'14.9dvh',duration:1})
        },8150)

        
    }
    const moveTutBtn=()=>{
        if (!tutorial) gsap.to(tutorialimg.current.position,{y:-5})
    }
    // set cam look at and move car
    const moveAndSetCamera=(lpx,lpy,lpz,tpx,tpy,tpz,mid,minAngle,maxAngle)=>{
        moveTutBtn()
        cam.current.position.z += 0.40
        CarRef.current.position.z -= 0.407
        gsap.to(CarRef.current.position,{x:mid,duration:1})
        controlcam.current.setLookAt(lpx,lpy,lpz,tpx,tpy,tpz,true)
        controlcam.current.minAzimuthAngle=minAngle*(Math.PI/180)
        controlcam.current.minAzimuthAngle=maxAngle*(Math.PI/180)
    }
        const moveAndSetCameraForS=(lpx,lpy,lpz,tpx,tpy,tpz,mid,minAngle,maxAngle)=>{
            moveTutBtn()
            cam.current.position.z -= 0.40
            CarRef.current.position.z += 0.407
            gsap.to(CarRef.current.position,{x:mid,duration:1})
            controlcam.current.setLookAt(lpx,lpy,lpz,tpx,tpy,tpz,true)
            controlcam.current.minAzimuthAngle=minAngle*(Math.PI/180)
            controlcam.current.minAzimuthAngle=maxAngle*(Math.PI/180)
        }
    useFrame(()=>{
        
        if (isWPressed && CarRef.current.position.z<-385 && sign2===false){ // if car reaches end
            setSign2(true)
            gsap.to(roadend3.current.position, {y:15,duration:0.5})
            gsap.to(roadend4.current.position,{y:10,duration:0.5})
            gsap.to(roadend3.current.position, {y:-2.5,delay:3})
            gsap.to(roadend4.current.position,{y:-2.5,delay:3})
            _.delay(()=>{setSign2(false)},3500)
        }
        if (isWPressed && CarRef.current.position.z>-387 && driveable){
            
            if (CarRef.current.position.z<-77 && CarRef.current.position.z>-120){ // car at about billboard 
                moveAndSetCamera(17,8,cam.current.position.z-100,-10,10.5,cam.current.position.z-100,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-55
                controlcam.current.maxDistance=cam.current.position.z-45
                
            }
            else if (CarRef.current.position.z<-155 && CarRef.current.position.z>-198) {  // car at projects billboard
                moveAndSetCamera(17,8,cam.current.position.z-180,-10,10.5,cam.current.position.z-180,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-130
                controlcam.current.maxDistance=cam.current.position.z-120
                
            }
            else if (CarRef.current.position.z<-233 && CarRef.current.position.z>-276) {  // car at skills billboard
                moveAndSetCamera(17,8,cam.current.position.z-260,-10,10.5,cam.current.position.z-260,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-200
                controlcam.current.maxDistance=cam.current.position.z-190
                
            }
            else if (CarRef.current.position.z<-311 && CarRef.current.position.z>-354) {  // car at connect billboard
                moveAndSetCamera(17,8,cam.current.position.z-340,-10,10.5,cam.current.position.z-340,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-280
                controlcam.current.maxDistance=cam.current.position.z-270
                
            }
            else { // car not at billboard
                moveAndSetCamera(4,0,2,CarRef.current.position.x-10,CarRef.current.position.y,CarRef.current.position.z,0,0,10)
                controlcam.current.minDistance=cam.current.position.z+15 //set camera zoom
                controlcam.current.maxDistance=cam.current.position.z+17
            }


        }
        if (isSPressed &&  (CarRef.current.position.z>-12) && sign1===false){
            setSign1(true)
            gsap.to(roadend1.current.position, {y:15,duration:0.5})
            gsap.to(roadend2.current.position,{y:13,duration:0.5})
            gsap.to(roadend1.current.position, {y:-1,delay:3})
            gsap.to(roadend2.current.position,{y:-1,delay:3})
            _.delay(()=>{setSign1(false)},3500)
        }
        if (isSPressed && CarRef.current.position.z<-10 && driveable){
            if (CarRef.current.position.z<-81 && CarRef.current.position.z>-120){
                moveAndSetCameraForS(17,8,cam.current.position.z-100,-10,10.5,cam.current.position.z-100,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-55
                controlcam.current.maxDistance=cam.current.position.z-45
            }
            else if (CarRef.current.position.z<-159 && CarRef.current.position.z>-198) {
                moveAndSetCameraForS(17,8,cam.current.position.z-180,-10,10.5,cam.current.position.z-180,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-130
                controlcam.current.maxDistance=cam.current.position.z-120
            }
            else if (CarRef.current.position.z<-237 && CarRef.current.position.z>-276) {
                moveAndSetCameraForS(17,8,cam.current.position.z-260,-10,10.5,cam.current.position.z-260,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-200
                controlcam.current.maxDistance=cam.current.position.z-190
            }
            else if (CarRef.current.position.z<-315 && CarRef.current.position.z>-354) {
                moveAndSetCameraForS(17,8,cam.current.position.z-340,-10,10.5,cam.current.position.z-340,-5,0,90)
                controlcam.current.minDistance=cam.current.position.z-280
                controlcam.current.maxDistance=cam.current.position.z-2270
            }
            else {
                moveAndSetCameraForS(4,0,2,CarRef.current.position.x-10,CarRef.current.position.y,CarRef.current.position.z,0,0,10)
                controlcam.current.minDistance=cam.current.position.z+15
                controlcam.current.maxDistance=cam.current.position.z+17
            }
        }
    })
   
    return (
        <>


            <Text  color={'white'} font={'Tangerine-Bold.ttf'} fontSize={1.8} position={[0, 10, 154.8]} rotation={[60*(Math.PI/180),0,0]} ref={line1}>Greetings! I'm Paritosh</Text>
            <Text color={'white'} font={'Tangerine-Bold.ttf'} fontSize={1.8} position={[0, 9, 153.2]} ref={line2} rotation={[60*(Math.PI/180),0,0]}>Welcome to my portfolio</Text>
            <Text onClick={enter} color={'white'} font={'Tangerine-Bold.ttf'} fontSize={1.8} position={[0, 7.5, 151.5]} ref={line3} rotation={[60*(Math.PI/180),0,0]} >Step inside -</Text>

            <Text font="Brie.otf" ref={roadend1} position={[-10,-1,-14]} scale={[2,2,2]} rotation={[0,80*(Math.PI/180),0]}>The road behind is closed! </Text>
            <Text font="Brie.otf" ref={roadend2} position={[-10,-1,-14]} scale={[2,2,2]} rotation={[0,80*(Math.PI/180),0]}>Time to go forward. </Text>
            
            <Text font="Brie.otf" ref={roadend3} scale={[4,4,4]} position={[0,-2.5,-400]}>Whoa, careful! You've hit the end</Text>
            <Text font="Brie.otf" ref={roadend4} scale={[3,3,3]} position={[0,-2.5,-400]}>Time to hit reverse!</Text>
            
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,0,-150]}>
                <circleGeometry  args={[400, 400]}></circleGeometry>
                <meshBasicMaterial color={'black'}></meshBasicMaterial>
            </mesh>

        {/*<Skills / >*/}
            <Road scale={[3.5,1,15]} position={[0,0.1,-65]}/>
            <Road scale={[3.5,1,15]} position={[0,0.1,-250]}/>
            <MainCar   moving={moving}  w={isWPressed} s={isSPressed} car={CarRef}
            position={[0,0,-50]} ref={CarRef}  rotation={[0,-110 * (Math.PI / 180),0]}

            />
            <Balls  row1={row1} row2={row2} row3={row3} row4={row4} row5={row5} row6={row6} row7={row7} row8={row8} row9={row9} row10={row10} row11={row11} row12={row12} row13={row13} row14={row14} row15={row15}
                row16={row16} row17={row17} row18={row18} row19={row19} row20={row20} row21={row21} row22={row22} row23={row23}  row26={row26} row27={row27} row28={row28}
            />
            <Lamps/>
            <Billboard position={[-10,-15,-100]}/>
            <Billboard position={[-10,-15,-180]}/>
            <Billboard position={[-10,-15,-260]}/>
            <Billboard position={[-10,-15,-340]}/>
            
            <Box position={[-10,21.2,-164.7]} scale={[0.1,16.3,9.5]}  onClick={()=>window.open('https://www.google.com/')} visible={false}></Box>
            <Box position={[-10,21.2,-174.9]} scale={[0.1,16.3,9.5]}  onClick={()=>window.open('https://www.google.com/')} visible={false}></Box>
            <Box position={[-10,21.2,-185]} scale={[0.1,16.3,9.5]}  onClick={()=>window.open('https://www.google.com/')} visible={false}></Box>
            <Box position={[-10,21.2,-195.1]} scale={[0.1,16.3,9.5]}  onClick={()=>window.open('https://www.google.com/')} visible={false}></Box>

            {!navigator.maxTouchPoints>0 && <Image ref={tutorialimg}  url='Frame 16.png' scale={[15,5,1]} position={[-10,10,-50]} rotation={[0,50*(Math.PI/180),0]}/>}


            <Image url='about.jpg' scale={[42,17.5,1]} position={[-10,15,-100]} rotation={[0,90*(Math.PI/180),0]}/>
            <Image url='skills.jpg' scale={[42,17.5,1]} position={[-10,15,-260]} rotation={[0,90*(Math.PI/180),0]}/>
            <Image url='projects.jpg' scale={[42,17.5,1]} position={[-10,15,-180]} rotation={[0,90*(Math.PI/180),0]}/>
            <Image url='connect.jpg' scale={[42,17.5,1]} position={[-10,15,-340]} rotation={[0,90*(Math.PI/180),0]}/>

            <Box position={[-10,15.8,-326.2]} scale={[0.1,8.6,11.5]}  onClick={()=>window.open('mailto:paritoshsagar25@gmail.com')} visible={false}></Box>
            <Box position={[-10,15.7,-340]} scale={[0.1,8.6,11.5]}  onClick={()=>window.open('https://www.linkedin.com/in/paritosh-sagar-22b738273/')} visible={false}></Box>
            <Box position={[-10,15.5,-353]} scale={[0.1,9.4,10]}  onClick={()=>window.open('https://github.com/Pariitosh')} visible={false}></Box>

            <RoadEnd scale={[5,6,5]} position={[-45,1.45,-400]} rotation={[0,0,-2*(Math.PI/180)]}/>
            <RoadEnd scale={[5,6,5]} position={[-37,0.1,-400]}/>
            <RoadEnd scale={[5,6,5]} position={[-29,-1,-400]} rotation={[0,0,2*(Math.PI/180)]}/>
            

        </>
    );
}
