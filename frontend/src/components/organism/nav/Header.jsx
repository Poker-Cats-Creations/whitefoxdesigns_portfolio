// 'use client'

// import React from 'react'
// import { SolidLogo } from '@/icons/Icons'
// //import Link from 'next/link'
// import { Link } from '@nextui-org/react'

// const Header = () => {
//    return (
//       <div className='flex justify-between items-center py-12 fixed top-0 z-10'>
//          <SolidLogo
//             size={56}
//             className='text-color-black'
//          />
//          <ul className='flex space-x-6'>
//             <li>
//                <Link
//                   href='/'
//                   underline={'hover'}
//                   className='text-primary-dark text-lg transition-colors'>
//                   Home
//                </Link>
//             </li>
//             <li>
//                <Link
//                   href='/en/about'
//                   underline={'hover'}
//                   className='text-primary-dark text-lg transition-colors'>
//                   About Me
//                </Link>
//             </li>
//             <li>
//                <Link
//                   href='/en/portfolio'
//                   underline={'hover'}
//                   className='text-primary-dark text-lg transition-colors'>
//                   Portfolio
//                </Link>
//             </li>
//          </ul>
//       </div>
//    )
// }

// export default Header

'use client'

import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar'
import { SolidLogo } from '@/icons/Icons'
import Link from 'next/link'
//import { Link } from '@nextui-org/react'

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false)
   const [isBlurred, setIsBlurred] = React.useState(false)

   const handleScroll = () => {
      const offset = window.scrollY
      setIsBlurred(offset > 50)
   }

   const menuItems = ['About Me', 'Terms of Service', 'Contact']

   return (
      <Navbar
         onMenuOpenChange={setIsMenuOpen}
         onScrollPositionChange={handleScroll}
         disableAnimation={true}
         className={`justify-center bg-primary-dark/[.8] backdrop-filter-none py-4 ${isBlurred && 'backdrop-filter backdrop-blur-lg'} mb-6`}
         maxWidth='2xl'
         // classNames={{
         //    base: 'bg-primary-dark/[.8] backdrop-filter-none py-4',
         // }}
      >
         <NavbarContent>
            <NavbarBrand>
               <Link
                  className='text-lg text-white-50 hover:text-[#f48638] hover:opacity-100'
                  href='/en'>
                  <SolidLogo
                     size={64}
                     className='text-white-50'
                  />
               </Link>
            </NavbarBrand>
         </NavbarContent>
         <NavbarContent justify='end'>
            <NavbarMenuToggle
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
               className='sm:hidden'
            />
         </NavbarContent>
         <NavbarContent
            justify='end'
            className='space-x-1 hidden sm:flex'>
            <NavbarItem>
               <Link
                  color='foreground'
                  className='text-lg text-white-50 transition-colors hover:text-[#f48638] hover:opacity-100'
                  href='/en/about'>
                  About Me
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Link
                  href='/en/tos'
                  // aria-current='page'
                  className='text-lg text-white-50 transition-colors hover:text-[#f48638] hover:opacity-100'>
                  Terms of Service
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Link
                  className='text-lg text-white-50 transition-colors hover:text-[#f48638] hover:opacity-100'
                  href='/en/contact'>
                  Contact
               </Link>
            </NavbarItem>
         </NavbarContent>
         <NavbarMenu className='bg-prmiary-dark pt-12'>
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                     //color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
                     className='w-full text-white-50'
                     href='#'
                     size='lg'>
                     {item}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   )
}

export default Header
