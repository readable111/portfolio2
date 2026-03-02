'use client'
import { useState } from 'react'
import styles from './bufferline.module.css'

export default function Bufferline() {
  const [ active, setActive ] = useState("home")
  return (
  <div className = {`nav nav-tabs ${styles.bufferline}`}>
      <button
        className={`${styles.bufferitem} ${active === "home" ? styles.active : ""}`}
        onClick = {() =>setActive("home")}
        >
        init.lua
      </button>
      <button
        className={`${styles.bufferitem} ${active === "tab1" ? styles.active : ""}`}
        onClick = {() =>setActive("tab1")}
        >
        tab1.lua
      </button>
      <button
        className={`${styles.bufferitem} ${active === "tab2" ? styles.active : ""}`}
        onClick = {() =>setActive("tab2")}
        >
        tab2.lua
      </button>
  </div>
  )
}
