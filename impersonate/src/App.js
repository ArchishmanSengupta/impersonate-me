//webcam dependencies
//app pose module

import logo from './logo.svg';
import './App.css';
import * as posenet from "@tensorflow-models/posenet";
import * as tf from "@tensorflow/tfjs";
import webcam from "react-webcam";
import Webcam from 'react-webcam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Webcam
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
      style={{
        position:"absolute",
        marginLeft:"top",
        marginRight: "top",
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
