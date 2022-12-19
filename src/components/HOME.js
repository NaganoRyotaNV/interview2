import React from 'react'
import {Link}from "react-router-dom";

function HOME() {
    
  return (
    <>
            <div className="inner">
            <h1 className="title">面接・ES対策</h1>
            <div className="contents">
              <h2 className="content1"><Link to="/Mode0" className="content0">時間制限あり</Link></h2>
              <h2 className="content2"><Link to="/Mode1" className="content0">時間制限なし</Link></h2>
            </div>
            </div>
    </>
  )
}

export default HOME