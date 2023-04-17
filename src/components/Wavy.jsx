import React from 'react'
import Wave from 'react-wavify'

const Wavy = () => (
  <Wave fill='#fff'
    paused={ true }
    options={ {
      height: 20,
      top: 80,
      amplitude: 90,
      speed: 0.15,
      points: 6
    } }
  />
)
export default Wavy