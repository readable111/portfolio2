"use client"

import { useState } from "react"
import Bufferline from "@/components/bufferline/bufferline";
import Tabcontent from "@/components/tabcontent/tabcontent";
import LineCount from "@/components/linecount/linecount";

export default function Home() {
  const [ active, setActive ] = useState("home")
  return (
    <>
      <Bufferline active = {active}  setActive={setActive}/>
      <LineCount active = {active}/>
      <Tabcontent active = {active}/>
    </>
  );
}
