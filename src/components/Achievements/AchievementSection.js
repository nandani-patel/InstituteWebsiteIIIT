import React from 'react'
import AchievementCard from './AchievementCard'

const AchievementSection = (props) => {
  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width:"80%"
      }}
      className = "achievement-section">
        <AchievementCard body={props.body1} />
        <AchievementCard body={props.body2} />
        <AchievementCard body={props.body3} />
      </div>
    </div>
  )
}

export default AchievementSection