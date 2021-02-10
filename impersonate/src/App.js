//webcam dependencies
//app pose module


import React, { useRef } from "react";
import logo from './logo.svg';
import './App.css';
import * as posenet from "@tensorflow-models/posenet";
import * as tf from "@tensorflow/tfjs";
import webcam from "react-webcam";
import Webcam from 'react-webcam';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  
const runPosenet = async () =>{
  const net = await posenet.load({
    inputResolution:{width:640,height:480},
    scale:0.5
  })


}

  
  return (
    <div className="App">
      <header className="App-header">
      <Webcam
      ref={webcamRef}
      style ={{
        position:"absolute",
        marginLeft:"auto",
        marginRight:"auto",
        left: 0,
        right:0,
        textAlign:"center",
        zIndex:9,
        width:640,
        height:480
      }}
      />

      <canvas
      ref={canvasRef}
      style={{
        position:"absolute",
        marginLeft:"auto",
        marginRight: "auto",
        left: 0,
        right:0,
        textAlign:"center",
        zIndex:9,
        width:640,
        height:480
      }}
      />
      </header>
    </div>
  );
}

export default App;
