"use client"

import { useState } from "react"
import Bufferline from "@/components/bufferline/bufferline";
import Tabcontent from "@/components/tabcontent/tabcontent";

export default function Home() {
  const [ active, setActive ] = useState("home")
  return (
  <Bufferline active = {active}  setActive={setActive}/>
  <Tabcontent/>
  );
}
