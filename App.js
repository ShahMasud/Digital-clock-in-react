import React, { useState } from "react";
import './App.css';



const App = () =>{
  let time= new Date().toLocaleTimeString();
  let [CTime, setCTime]= useState(time);

  let UpdateTime = () =>{
    let times= new Date().toLocaleTimeString();
    setCTime(times);

  };
  setInterval(UpdateTime, 1000);

  return(
    <>
      <h1>{CTime}</h1>


    </>
  );

}
export default App;
