import React from 'react';
import { Canvas } from 'react-three-fiber';
import './styles.css';


function Box() {
  return(
    <mash>
    <boxBufferGeometry attach = "geometry" />
    <meshLambertMaterial attach = "material" color="hotpink" />
  </mash>
  );
  
}
export default function App(){
  return <Canvas>
    <Box/>
  </Canvas>;
}