import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between border-b-2'>
        <div>
            <Image src="/SteppingStone logo.png" alt='stepping stone logo' width={300} height={200} />
        </div>
        <div>Links</div>
    </nav>
  )
}

export default Navbar