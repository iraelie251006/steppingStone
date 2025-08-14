import Image from 'next/image'
import React from 'react'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
  return (
    <nav className='flex justify-between border-b-2 px-4'>
        <div className=''>
            <Image src="/SteppingStone logo.png" alt='stepping stone logo' width={300} height={200} />
        </div>
        <MobileNavigation />
    </nav>
  )
}

export default Navbar