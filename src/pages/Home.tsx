import React from "react"
import Event from "../components/EventComponent";

function Home() {
  return (
    <div>
      <Event name="Bachata Festival" date="20.11.2022" location="Kehrwieder 5" />
      <Event name="Bachata Festival #2" date="27.11.2022" location="Kehrwieder 5" />
      <Event name="Bachata Festival #3" date="04.12.2022" location="Kehrwieder 5" />
    </div>
  )
}

export default Home;