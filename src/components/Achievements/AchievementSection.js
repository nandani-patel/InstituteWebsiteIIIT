import React from 'react'
import AchievementCard from './AchievementCard'

const AchievementSection = (props) => {
  return (
      <div style={{
          display: "flex",
          justifyContent:"space-between"
      }}>
          <AchievementCard body= {props.body1 }/>
          <AchievementCard body= {props.body2 }/>
          <AchievementCard body= {props.body3 }/>
    </div>
  )
}

export default AchievementSection