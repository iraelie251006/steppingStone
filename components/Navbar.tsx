import Image from 'next/image'
import React from 'react'
import MobileNavigation from './MobileNavigation'
import { sidebarLinks } from '@/lib/navLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between border-b-2 max-md:px-4 px-10'>
        <div className='ml-14 max-md:ml-0'>
            <Image src="/SteppingStone logo.png" alt='stepping stone logo' width={300} height={200} />
        </div>
        <div className='flex items-center max-md:hidden mr-14'>
          {sidebarLinks.map(({label, route}) => (
            <Link href={route} key={label} className='font-bold text-[18px] px-4'>
              {label}
            </Link>
          ))}
        </div>
        <MobileNavigation />
    </nav>
  )
}

export default Navbar