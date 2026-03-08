"useClient"

import { useState, useEffect } from "react";
import styles from "./linecount.module.css"

export default function LineCount(props : {active:string, lineCount:string}){
  const [lines, setLines] = useState();

  useEffect(() => {
    const count = document.querySelectorAll(`#${props.active}-tab-pane > .line`).length;
    setLines(count+1)
  }, [props.active])

  return (
    <div id="gutter" className={`${styles.linecount}`}>
      { Array.from({length: lines}, (_,i) =>(
        <span key={i} className="ln">{i}</span>
      ))}
    </div>
  )
}
