

import './index.css'
import {Canvas} from "@react-three/fiber"
import Experience from './Experience'
import { useControls } from 'leva';
import {PerspectiveCamera, Loader, Stars, CameraControls} from '@react-three/drei'
import {useEffect, useRef, useState,} from 'react'
export default function App() {
  const MainCamera=useRef()
  const orbit=useRef()
    const [isWPressed, setIsWPressed] = useState(false);
    const [isSPressed, setIsSPressed] = useState(false);
    const [tutorial,setTutorial]=useState(true)
    const environment=useRef()
    useEffect(() => {
      const handleKeyDown = (event) => {  // check w s or up down arrow
        if (event.key === 'w' || event.key === 'W' || event.keyCode===38)
        { 
          setIsWPressed(true)
          setTutorial(false)
        }
        if (event.key === 's' || event.key === 'S' || event.keyCode===40) 
        {
          setIsSPressed(true)
          setTutorial(false)

        }
      };
      
      const handleKeyUp = (event) => {
        if (event.key === 'w' || event.key === 'W' || event.keyCode===38) {
          setIsWPressed(false);
          setTutorial(false)

        }
        if (event.key === 's' || event.key === 'S' || event.keyCode===40) {
          setIsSPressed(false);
          setTutorial(false)

        }
      };
      const handleTouchFront=(e)=>{
        e.preventDefault();
        setIsWPressed(true)
        setTutorial(false)

      }
      const handleReleaseFront=(e)=>{
        e.preventDefault();
        setIsWPressed(false)
        setTutorial(false)

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
    
    window.addEventListener('resize', handleResize)
    const [place,setPlace]=useState('')
    const navbar=useRef()
    const options=useRef()
    const buttons=useRef()
   
    

    return (
      //
        <>
        {height>width&&
          <>
            <div style={{fontSize:"3vw",color:'white',position:"absolute",zIndex:"1", height:'100vh',width:"100vw",backgroundColor:'black',display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",gap:'2vh'}} >
            <h1>Please rotate your device</h1>
            <div className='phone'></div>
             
            </div>
          </>
          }
          <div  style={{display:navigator.maxTouchPoints>0 ?'block':"none"}}> 
            <div ref={buttons} style={{opacity:0,position:'absolute',zIndex:'1',display:"flex",flexDirection:"column",gap:"6vh",left:"80vw",top:'30vh'}}>
              <img id='forward' src='forward.jpg' style={{display:width>height?'block':'none',borderRadius:"20px",height:"21vh",width:'9vw',opacity:0.7}}></img>
              <img id='backword' src='backword.jpg' style={{display:width>height?'block':'none',borderRadius:"20px",height:"21vh",width:'9vw',opacity:0.7}}></img>
            </div>
          </div>
          {<div   ref={navbar} id='navbar' className='outer' style={{display:width>height?'flex':'none'}}>
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
              {/* <div onClick={()=>setPlace('connect')} className='option' id='last'>
                <h1 ref={options}>Connect</h1>
              </div> */}
            </div>
          </div>
          }
           {/*  */}
           <div id='canvas-container'>

           </div>
          <Canvas id='canvas' shadows gl={{ shadowMapEnabled: true }} style={{background:'#030114'}}>
          <Stars  radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1}/>
          
          
              <PerspectiveCamera lookAt={[0,50,0]} ref={MainCamera}  position={[0, -7, -150]} >
                <CameraControls  truckSpeed={0} maxDistance={12.5} minDistance={12} minPolarAngle={155*(Math.PI/180)} maxPolarAngle={145*(Math.PI/180)} minAzimuthAngle={0*(Math.PI/180)} maxAzimuthAngle={0*(Math.PI/180)}  ref={orbit}   ></CameraControls>
              
                <Experience   buttons={buttons} navbar={navbar} place={place}  isSPressed={isSPressed} isWPressed={isWPressed} st={10} controlcam={orbit} cam={MainCamera} tutorial={tutorial}>

                </Experience>
              </PerspectiveCamera>
             
          </Canvas>
          
          <Loader containerStyles={{backgroundColor:"black",justifyContent:"center"}} barStyles={{marginBottom:"10dvh",width:"90dvw"}} innerStyles={{justifyContent:"center",width:"90dvw",top:'40vh',position:'relative'}} />
        </>
          

    )
  
}
