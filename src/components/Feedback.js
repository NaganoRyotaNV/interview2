import React from 'react'
import {useLocation}from "react-router-dom";
import {Link}from "react-router-dom";
import { useState } from 'react'


const Feedback = () => {

  const location = useLocation();
  const [download, setDownload] = useState("");
  console.log(location.state)

  const handleDownload = (e) => {
    setDownload('data:text/plain;charset=utf-8,' + encodeURIComponent(location.state.name));
  }

  return (
    <>
    <h2 className="title" >フィードバック</h2>
      <form style={{resize:"none", width:600, height:100}}>{location.state.name}</form>
      <a href={download} download="download.txt" ><button className='dawnload' onClick={handleDownload} >Download</button></a>
      < Link to="/" className='home'>ホーム</Link>
</>
  )
}

export default Feedback