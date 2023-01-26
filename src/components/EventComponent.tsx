import React from "react"
import "../style/eventStylesheet.css"
import dancePhoto from "../assets/dancePhoto.jpg"


function Event(params: any) {
  return (
    <div className="eventContainer">
      <img src={dancePhoto} alt="" className="photo" />
      <div className="eventInfoList">
        <div className="textContainer">
          <div className="text">{params.name}</div>
          <div className="text">{params.date}</div>
          <div className="text">{params.location}</div>
        </div>
      </div>
    </div>
  )
}

export default Event;