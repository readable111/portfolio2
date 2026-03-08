'use client'

import { useState, useEffect } from 'react'
import styles from "./tabcontent.module.css"

export default function Tabcontent(props:{active:string}){
  return (
    <>
      <div className={`${props.active == "home" ? "" : "d-none"}`} id="home-tab-pane" role="tabpanel">
        <div className= "line"></div>
        <div className= "line"></div>
        <div className= "line"></div>
        <div className= "line"></div>
        <div className= "line"></div>
        <div className= "line"></div>
        <div className= "line"></div>
        <div className= "line"></div>
      </div>
      <div className={`${props.active == "tab1" ? "" : "d-none"}`} id="tab1-tab-pane" role="tabpanel">
        tab1
      </div>
      <div className={`${props.active == "tab2" ? "" : "d-none"}`} id="tab2-tab-pane" role="tabpanel">
        tab2
      </div>
    </>
  )
}
