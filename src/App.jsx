/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unknown-property */

import './index.css'
import {Canvas} from "@react-three/fiber"
import Experience from './Experience'
import {Environment, PerspectiveCamera, Loader, Stars, CameraControls} from '@react-three/drei'
import {useEffect, useRef, useState,} from 'react'
import { useControls } from 'leva'
export default function App() {
  //const {x,y,z}=useControls({x:{value:0,min:-100,max:100,step:0.1},y:{value:0,min:-100,max:100,step:0.1},z:{value:0,min:-100,max:100,step:0.1}})
  const MainCamera=useRef()
  //const { rotX,rotY,rotZ } = useControls({rotX: {value: 0,min: -360,max: 360,step: 1,},rotY: {value: 0,min: -360,max: 360,step: 1},rotZ: {value: 0,min: -360,max: 360,step: 1,}})
  const orbit=useRef()
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;  // to check mobile
    const mobileKeywords = ['Android','webOS','iPhone','iPad','iPod','BlackBerry','Windows Phone'];
    const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
    setIsMobile(isMobileDevice);
    const preventScroll=(e)=>{
      e.preventDefault()
    }
    window.addEventListener('wheel', preventScroll, { passive: false });

    }, []);
    const [isWPressed, setIsWPressed] = useState(false);
    const [isSPressed, setIsSPressed] = useState(false);
    
    useEffect(() => {
      const handleKeyDown = (event) => {  // check w s or up down arrow
        if (event.key === 'w' || event.key === 'W' || event.keyCode===38)
        { 
          setIsWPressed(true)
          
        }
        if (event.key === 's' || event.key === 'S' || event.keyCode===40) 
        {
          setIsSPressed(true)
          
        }
      };
      
      const handleKeyUp = (event) => {
        if (event.key === 'w' || event.key === 'W' || event.keyCode===38) {
          setIsWPressed(false);
          
        }
        if (event.key === 's' || event.key === 'S' || event.keyCode===40) {
          setIsSPressed(false);
          
        }
      };
      const handleTouchFront=(e)=>{
        e.preventDefault();
        setIsWPressed(true)
      }
      const handleReleaseFront=(e)=>{
        e.preventDefault();
        setIsWPressed(false)
      }
      const handleTouchBack=(e)=>{
        backword.style.scale='110%'
          backword.style.transition='100ms'
        e.preventDefault();
        setIsSPressed(true)
      }
      const handleReleaseBack=(e)=>{
        backword.style.scale='100%'
          backword.style.transition='100ms'
        e.preventDefault();
        setIsSPressed(false)
      }
      const forward=document.getElementById("forward")
      const backword=document.getElementById("backword")
      
        forward.addEventListener("touchstart",(e)=>{
          e.preventDefault();
          forward.style.scale='110%'
          forward.style.transition='100ms'
          setIsWPressed(true)
        })
        forward.addEventListener("touchend",(e)=>{
          forward.style.scale='100%'
          forward.style.transition='100ms'
          e.preventDefault();
          setIsWPressed(false)
        })
        backword.addEventListener("touchstart",handleTouchBack)
        backword.addEventListener("touchend",handleReleaseBack)
        
    
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
        forward.removeEventListener("touchstart",handleTouchFront)
        forward.removeEventListener("touchend",handleReleaseFront)
        backword.removeEventListener("touchstart",handleTouchBack)
        backword.removeEventListener("touchend",handleReleaseBack)
        

      };
    }, []);
    
    const[height,setHeight]=useState(window.innerHeight)
    const [width,setWidth]=useState(window.innerWidth)
    const handleResize=()=>{
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
      
    }
    useEffect(()=>{
      
    },[height,width])
    window.addEventListener('resize', handleResize)
    const [place,setPlace]=useState('')
    const navbar=useRef()
    const options=useRef()
    const buttons=useRef()
    useEffect(()=>{console.log('w s pressed')},[isWPressed,isSPressed])
    return (
      //
        <>
        {height>width&&
          <>
            <div style={{fontSize:"3vw",color:'white',position:"absolute",zIndex:"1", height:'100vh',width:"100vw",backgroundColor:'black',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",gap:'2vh'}} >
            <h1>Please rotate your device</h1>
            <img src='smartphone.png' height='40vh' width='40vw'></img> 
            </div>
          </>
          }
          <div  style={{display:isMobile && height<width?'block':"none"}}> 
            <div ref={buttons} style={{opacity:0,position:'absolute',zIndex:'1',display:"flex",flexDirection:"column",gap:"6vh",left:"80vw",top:'30vh'}}>
              <img id='forward' src='forward.jpg' style={{borderRadius:"20px",height:"21vh",width:'9vw',opacity:0.7}}></img>
              <img id='backword' src='backword.jpg' style={{borderRadius:"20px",height:"21vh",width:'9vw',opacity:0.7}}></img>
            </div>
          </div>
          {<div   ref={navbar} id='navbar' className='outer'>
            <div className='inner'>
              <div onClick={()=>setPlace('about')} className='option' id='first'>
                <h1 ref={options}>About</h1>
              </div>
              <div onClick={()=>setPlace('projects')} className='option'>
                <h1 ref={options}>Projects</h1>
              </div>
              <div onClick={()=>setPlace('skills')} className='option'>
                <h1 ref={options}>Skills</h1>
              </div>
              <div onClick={()=>setPlace('connect')} className='option' id='last'>
                <h1 ref={options}>Connect</h1>
              </div>
            </div>
          </div>
          }
          <Canvas shadows style={{background:'#030114'}}>
          <Stars  radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1}/>

              <PerspectiveCamera  ref={MainCamera}   position={[0, -7, -150]} >
                <CameraControls  maxDistance={12.5} minDistance={12}  minPolarAngle={155*(Math.PI/180)} maxPolarAngle={145*(Math.PI/180)} minAzimuthAngle={0*(Math.PI/180)} maxAzimuthAngle={0*(Math.PI/180)}  ref={orbit}   ></CameraControls>

                <Experience buttons={buttons} navbar={navbar} place={place} mobile={isMobile} isSPressed={isSPressed} isWPressed={isWPressed} st={10} controlcam={orbit} cam={MainCamera}>

                </Experience>
              </PerspectiveCamera>
              <Environment
                  files={'kloofendal_overcast_puresky_1k.hdr'}
                  background={false}
              />
          </Canvas>
          <Loader containerStyles={{backgroundColor:"black",justifyContent:"center"}} barStyles={{marginBottom:"10dvh",width:"90dvw"}} innerStyles={{justifyContent:"center",width:"90dvw",top:'40vh',position:'relative'}} />
        </>
          

    )
  
}
