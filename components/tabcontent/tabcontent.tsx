'use client'
import useState from "react"
import styles from "./tabcontent.module.css"

export default function Tabcontent(){
  return (
    <>
      <div className="tabpane" id="home-tab-pane" role="tabpanel">
        home tab
      </div>
      <div className="tabpane" id="tab1-tab-pane" role="tabpanel">
        home tab
      </div>
      <div className="tabpane" id="tab2-tab-pane" role="tabpanel">
        home tab
      </div>
    </>
  )
}
