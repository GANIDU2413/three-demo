import React from 'react';
import {Canvas} from "react-three-fiber";
import logo from './logo.svg';
import './App.css';


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