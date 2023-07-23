import {Suspense, useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import Loader from "../Loader"
import PropTypes from 'prop-types'; 

const Computers = ({isMobile}) => {
   const earth =useGLTF('./earth/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={0} castShadow shadow-mapSize={1024}/>
      <primitive object={earth.scene} scale={isMobile?1.5:3} position={isMobile?[0,-1.6,-1.6]:[-0.75,-4.1,-1.5]} rotation={[-0.01,-0.2,-0.1]}/>
    </mesh>
  )
}

Computers.propTypes={
  isMobile:PropTypes.bool
}

const ComputersCanvas=()=>{
  const [isMobile,setIsMobile]=useState(false)
  useEffect(()=>{
     // Add a listener for changes to the screen size
     const mediaQuery = window.matchMedia("(max-width: 500px)");

     // Set the initial value of the `isMobile` state variable
     setIsMobile(mediaQuery.matches);
 
     // Define a callback function to handle changes to the media query
     const handleMediaQueryChange = (event) => {
       setIsMobile(event.matches);
     };
 
     // Add the callback function as a listener for changes to the media query
     mediaQuery.addEventListener("change", handleMediaQueryChange);
 
     // Remove the listener when the component is unmounted
     return () => {
       mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }},[])

  return(
    <Canvas className={isMobile?"hidden":""} frameloop='demand' shadows={true} camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
      <Suspense fallback={<Loader/>}>
      <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas