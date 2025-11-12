import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
      <Image src="/Rectangle.jpg" width={1000} height={1000} alt="hero_image_of_softwarica"
      className='w-full' / >
    </div>
  )
}

export default Hero
