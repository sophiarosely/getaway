import React, {useRef, useEffect, useState} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import '@tensorflow/tfjs-backend-webgl';

const Painting = () =>{

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);


  const runHandPose = async () =>{

    const net = await handpose.load()
    console.log("hand pose loaded")
    //loop to constantly search for a hand in frame

  }

  const detect = async (net:any)=>{
    //check data is available
    //get video properties
    //Set height and width
    //set Canvas height and width
    //Make detections
    //draw mesh
  }


runHandPose();

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