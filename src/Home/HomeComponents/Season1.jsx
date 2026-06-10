import React from 'react'
import Image1 from '../../assets/Banner/banner1.png'
import Image2 from '../../assets/Banner/banner2.png'
import Image3 from '../../assets/Banner/banner3.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Season1 = () => {

  return (
    <Carousel autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}>
      <div>
        <img src={Image1} alt="" />
      </div>
      <div>
        <img src={Image2} alt="" />
      </div>
      <div>
        <img src={Image3} alt="" />
      </div>
    </Carousel>
  )
}

export default Season1