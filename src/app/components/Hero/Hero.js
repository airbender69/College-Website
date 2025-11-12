"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
const [currentImage,setCurrentImage]=useState('/Rectangle.jpg');

  useEffect(() => {
    const image=['/Rectangle.jpg','/softwarica.png']
    let index=0;
    setInterval(()=>{
        index=(index+1)%image.length;
        setCurrentImage(image[index])
    },3000)
  }, [])
  
  return (
    <div className="relative h-[80vh] w-full">
      <Image
        src={currentImage}
        alt="hero image"
        fill
        className="object-cover transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/35"></div>
    </div>
  );
}
