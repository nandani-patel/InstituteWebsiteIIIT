import React from 'react'
import AchievementCard from './AchievementCard'

const AchievementSection = (props) => {
  return (
    <div>
      <center 
        style={{
          fontSize: "2rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          paddingBottom: "4 rem", 
          color: "#013571"
        }}>
          <div style={{paddingRight : "100px"}} >
        <b>{props.title}</b>
        </div>
      </center>
      <div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%"
        }}
          className="achievement-section">
          <AchievementCard body={props.body1} />
          <AchievementCard body={props.body2} />
          <AchievementCard body={props.body3} />
        </div>
      </div>
    </div>
  )
}

export default AchievementSection