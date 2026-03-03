'use client'
import styles from './bufferline.module.css'

export default function Bufferline(props:{active:string, setActive:any}){
  return (
 <div className = {`nav nav-tabs ${styles.bufferline}`} id="tabs">
      <button
        className={`${styles.bufferitem} ${props.active === "home" ? styles.active : ""}`}
        onClick = {() =>props.setActive("home")}
        id = "home-tab"
        data-bs-toggle="tab"
        data-bs-target="#home-tab-pane"
        >
        init.lua
      </button>
      <button
        className={`${styles.bufferitem} ${props.active === "tab1" ? styles.active : ""}`}
        onClick = {() =>props.setActive("tab1")}
        id = "tab1"
        data-bs-toggle="tab"
        data-bs-target="#tab1-tab-pane"
        >
        tab1.lua
      </button>
      <button
        className={`${styles.bufferitem} ${props.active === "tab2" ? styles.active : ""}`}
        onClick = {() =>props.setActive("tab2")}
        id = "tab2"
        data-bs-toggle="tab"
        data-bs-target="#tab2-tab-pane"
        >
        tab2.lua
      </button>
  </div>
  )
}
