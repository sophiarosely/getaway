import React, {useRef, useEffect, useState} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";


const Painting = () =>{

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);


return(
  <div>
  <h1>Painting Page</h1>
<Webcam ref={ webcamRef }
style={{
  position:"absolute",
  marginLeft:"auto",
  marginRight:"auto",
  left:0,
  right:0,
  textAlign:"center",
  zIndex:9,
  width:640,
  height:480
}} />
<canvas
ref={canvasRef}
style={{
  position:"absolute",
  marginLeft:"auto",
  marginRight:"auto",
  left:0,
  right:0,
  textAlign:"center",
  zIndex:9,
  width:640,
  height:480
}} />
  </div>
)

};

export default Painting;