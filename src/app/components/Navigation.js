import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
const Navigation = () => {
  return (
    <div>
     <nav>
        <div className='flex  justify-around items-center p-3'>
       <div> <Image src="https://softwarica.edu.np/file-manager/photos/1/Logo.svg" width={200} height={200}
        alt='softwarica'/> </div>
       <div className='flex justify-center items-center gap-5 max-md:hidden text-sm font-bold'>
           <Link href="/about">ABOUT US</Link>
            <Link href="/interstudent">INTERNATIONAL STUDENT</Link>
            <Link href="/studentcentre">STUDENT CENTRE</Link>
            <Link href="/contact">CONTACT US</Link>
            <Link href="/career">CAREER</Link>
          <Button variant="contained">APPLY NOW</Button>
       </div>
       <div className='md:hidden sm:flex'>
          <ToggleButton value="right" key="right">
           <FormatAlignRightIcon />
         </ToggleButton>,
       </div>
             

        </div>
     </nav>
    </div>
  )
}

export default Navigation
