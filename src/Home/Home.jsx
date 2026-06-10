import React from 'react'
import Season1 from './HomeComponents/Season1'
import Season2 from './HomeComponents/Season2'
import Season3 from './HomeComponents/Season3'
import Season4 from './HomeComponents/Season4'
import Season5 from './HomeComponents/Season5'
import Season6 from './HomeComponents/Season6'
import Season7 from './HomeComponents/Season7'


const Home = () => {
  return (
    <div>
      <div className='my-3.5 mt-4'><Season1></Season1></div>
      <Season2></Season2>
      <Season3></Season3>
      <Season4></Season4>
      <Season5></Season5>
      <Season6></Season6>
      <Season7></Season7>
      </div>

  )
}

export default Home