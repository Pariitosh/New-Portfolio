import RoadEnd from "./RoadEnd";

export default function RoadEndObstacles(){
    return(
        <>
        <RoadEnd scale={[5, 6, 5]} position={[-45, 1.45, -400]} rotation={[0, 0, -2 * (Math.PI / 180)]} />
            <RoadEnd scale={[5, 6, 5]} position={[-37, 0.1, -400]} />
            <RoadEnd scale={[5, 6, 5]} position={[-29, -1, -400]} rotation={[0, 0, 2 * (Math.PI / 180)]} />
            </>
    )
}