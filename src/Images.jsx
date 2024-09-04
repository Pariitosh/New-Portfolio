import { Box, Image } from "@react-three/drei";
import { Billboard } from "./Billboard";

export default function Billboards() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'Paritosh Resume.pdf';
        link.download = 'Paritosh_Resume';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
            <Billboard position={[-10, -15, -100]} />
            <Billboard position={[-10, -15, -180]} />
            <Billboard position={[-10, -15, -260]} />
            <Billboard position={[-10, -15, -340]} />

            <Box onPointerOver={() => document.body.style.cursor = "pointer"} onPointerLeave={() => document.body.style.cursor = "auto"} position={[-10, 15, -164.7]} scale={[0.1, 16.3, 9.5]} onClick={() => window.open('https://www.nuchainscan.com/')} visible={false}></Box>
            <Box onPointerOver={() => document.body.style.cursor = "pointer"} onPointerLeave={() => document.body.style.cursor = "auto"} position={[-10, 15, -174.9]} scale={[0.1, 16.3, 9.5]} onClick={() => window.open('https://chat-rumble.vercel.app/')} visible={false}></Box>
            <Box onPointerOver={() => document.body.style.cursor = "pointer"} onPointerLeave={() => document.body.style.cursor = "auto"} position={[-10, 15, -185]} scale={[0.1, 16.3, 9.5]} onClick={() => window.open('https://www.pariitosh.com/')} visible={false}></Box>
            <Box onPointerOver={() => document.body.style.cursor = "pointer"} onPointerLeave={() => document.body.style.cursor = "auto"} position={[-10, 15, -195.1]} scale={[0.1, 16.3, 9.5]} onClick={() => window.open('https://www.brutalfruit.co.za/')} visible={false}></Box>


            <Box onPointerOver={() => document.body.style.cursor = "pointer"} onPointerLeave={() => document.body.style.cursor = "auto"} position={[-10, 17.5, -349]} scale={[0.1, 11.6, 14.5]} onClick={() => window.open('mailto:paritoshsagar25@gmail.com')} visible={false}></Box>
            <Box onPointerOver={() => document.body.style.cursor = "pointer"} onPointerLeave={() => document.body.style.cursor = "auto"} position={[-10, 17.5, -330]} scale={[0.1, 11.6, 14.5]} onClick={handleDownload} visible={false}></Box>


            <Image url='about.jpg' scale={[42, 17.5, 1]} position={[-10, 15, -100]} rotation={[0, 90 * (Math.PI / 180), 0]} />
            <Image url='skills.jpg' scale={[42, 17.5, 1]} position={[-10, 15, -260]} rotation={[0, 90 * (Math.PI / 180), 0]} />
            <Image url='projects.jpg' scale={[42, 17.5, 1]} position={[-10, 15, -180]} rotation={[0, 90 * (Math.PI / 180), 0]} />
            <Image url='Frame 5(4).jpg' scale={[42, 17.5, 1]} position={[-10, 15, -340]} rotation={[0, 90 * (Math.PI / 180), 0]} />
        </>
    )
}
