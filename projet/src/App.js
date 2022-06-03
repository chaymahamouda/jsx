import React from 'react';
import myWonderfulImage from "./runn.png"
import './App.css';

function App() {
  return (
    <div style={{border:'solid 1px noir',maxWidth:'100vw'}}>
      <>
      <h1 style={{color: "red"}}>Chayma Hamouda</h1>
      </>
      <br/>
      
      <img src={myWonderfulImage} alt ='myImage' />
     <br/>
      <img src="/run.png" alt="myimage" />
      <br/>
      <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5STqwexBOu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )}
export default App;
