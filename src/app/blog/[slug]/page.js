import React from 'react'

const page =async ({params}) => { 
    const {slug}=await params;
  return (
    <div>
      <h1>My Post:{slug} </h1>
    </div>
  )
}

export default page
