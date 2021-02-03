import React, {Suspense} from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/js/loaders/GLTFLoader'

 const LoadModel = () => {
     const gltf = useLoader(GLTFLoader,"/static_assets/iPhone 6.obj")
     return (
         <primitive object={gltf.scene} dispose = {null} />
     )
 }

 const UseModel = () => {
     return (
         <Suspense fallback = {null}>
             <LoadModel />
         </Suspense>
     )
 }

 const App = () => {
     return (
         <Canvas>
             <mesh>
                 <UseModel />
             </mesh>
         </Canvas>
     )
 }