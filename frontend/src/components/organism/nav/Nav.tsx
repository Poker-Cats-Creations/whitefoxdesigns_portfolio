'use client'
import {
   OutlineBell,
   OutlineBookmark,
   OutlineChat,
   OutlineEdit,
   OutlineHome,
   OutlineLogout,
   OutlineMore,
   OutlineReceipt,
   OutlineSearch,
   OutlineSettings,
   OutlineUser,
   SolidBell,
   SolidBookmark,
   SolidChat,
   SolidHome,
   SolidSearch,
   SolidSettings,
} from '@/icons/Icons'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/atom/Button'
import NavItem from '@/components/molecule/NavItem'
import { Notification } from '@/components/molecule/Notification'
import UserInfo from '@/components/molecule/UserInfo'
import { Avatar, Badge, ScrollShadow, Skeleton } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/molecule/HoverCard'

import ListUser from '@/components/organism/nav/ListUser'

type NotificationType = 'dot' | 'count'

export const Nav = () => {
   const pathname = usePathname()
   const isAuthenticated = true
   const isAdmin = false
   const isLoading = false

   const [windowWidth, setWindowWidth] = useState<number | null>(null)
   useEffect(() => {
      setWindowWidth(window.innerWidth)

      const handleResize = () => {
         setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   const NavLinkItem = [
      {
         active: pathname === '/en/home',
         href: '/en/home',
         text: 'Nest',
         icon: 'home',
         notification: { type: 'dot', count: 0 },
         badge: { active: true, content: 'New Hoots' },
      },
      {
         active: pathname === '/en/explore',
         href: '/en/explore',
         text: 'Explore',
         icon: 'explore',
      },
      ...(isAuthenticated
         ? [
              {
                 active: pathname === '/en/notifications',
                 href: '/en/notifications',
                 text: 'Echoes',
                 icon: 'notifications',
              },
              {
                 active: pathname === '/en/messages',
                 href: '/en/messages',
                 text: 'Chatter',
                 icon: 'messages',
              },
              {
                 active: pathname === '/en/bookmarks',
                 href: '/en/bookmarks',
                 text: 'StarMark',
                 icon: 'bookmarks',
              },
           ]
         : []),
      {
         active: pathname === '/en/settings',
         href: '/en/settings',
         text: 'Tweak',
         icon: 'settings',
         notification: { type: 'count', count: 3 },
         badge: { active: true, content: 'New' },
      },
      ...(isAuthenticated
         ? [
              {
                 active: false,
                 text: 'Logout',
                 icon: 'logout',
                 onClick: () => {
                    // signOut()
                    // setUser(INITIAL_USER)
                    // setIsAuthenticated(false)
                    // navigate('/sign-in')
                 },
              },
           ]
         : []),
      ...(isAdmin
         ? [
              {
                 active: false,
                 text: 'CREATE NEW CODE',
                 icon: 'ticket',
                 badge: { active: false, content: 'Admin' },
                 onClick: async () => {
                    // const code = generateCode()
                    // toast({
                    // 	variant: 'success',
                    // 	title: 'Successfuly created new invite code!',
                    // 	description: `your code is: ${code}`,
                    // })
                    // const saveCode = await saveCodeToDB(code)
                    // if (saveCode) {
                    // 	return toast({
                    // 		variant: 'success',
                    // 		title: 'Code successfully saved to DB',
                    // 	})
                    // } else {
                    // 	return toast({
                    // 		variant: 'destructive',
                    // 		title: 'Something gone wrong!',
                    // 	})
                    // }
                 },
              },
           ]
         : []),
   ]

   const activeIcons = {
      home: <SolidHome size={24} />,
      explore: <SolidSearch size={24} />,
      notifications: <SolidBell size={24} />,
      messages: <SolidChat size={24} />,
      bookmarks: <SolidBookmark size={24} />,
      settings: <SolidSettings size={24} />,
   }

   const inactiveIcons = {
      home: <OutlineHome size={24} />,
      explore: <OutlineSearch size={24} />,
      notifications: <OutlineBell size={24} />,
      messages: <OutlineChat size={24} />,
      bookmarks: <OutlineBookmark size={24} />,
      settings: <OutlineSettings size={24} />,
      logout: <OutlineLogout size={24} />,
      ticket: <OutlineReceipt size={24} />,
   }

   return (
      <nav
         className={`sticky z-10 top-0 ml-5 hidden h-screen max-w-[8rem] flex-1 flex-col items-end justify-between py-[2.5rem] pl-10 pr-8 md:flex lg:ml-0 xl:ml-0 xl:max-w-[17rem] xl:items-start xl:px-0`}>
         <ScrollShadow className='flex h-full flex-col justify-between overflow-auto lg:w-full lg:px-0'>
            <section className='rounded-2x flex w-full flex-col gap-6 px-0 xl:px-2'>
               <ul className='flex flex-col items-end gap-2'>
                  {NavLinkItem.map(({ active, href, text, icon, onClick, notification, badge }, i) => (
                     <React.Fragment key={`nav-${i}`}>
                        <NavItem
                           badge={badge}
                           active={active}
                           link={href}
                           onClick={onClick}>
                           <Notification
                              type={notification?.type as NotificationType}
                              count={notification?.count}
                              className={
                                 (notification?.type as NotificationType) === 'dot' &&
                                 `border-primary-dark bg-accent-600 right-0 top-0 h-3 w-3 border-2`
                              }>
                              {icon && (active ? activeIcons[icon as keyof typeof activeIcons] : inactiveIcons[icon as keyof typeof activeIcons])}
                           </Notification>

                           <span
                              className={`
												hidden
												flex-none
												text-lg
												xl:inline-flex
												${active && 'font-bold'}
											`}>
                              {text}
                           </span>
                        </NavItem>
                     </React.Fragment>
                  ))}
               </ul>
               <Button
                  size={windowWidth ? 'lg-icon' : 'lg'}
                  className='w-full'
                  disabled>
                  {windowWidth !== null && windowWidth < 1366 ? <OutlineEdit size={24} /> : 'Hoot'}
               </Button>
            </section>

            {isLoading ? (
               <section className='bg-primary-lighter flex w-fit items-center justify-center gap-4 overflow-hidden rounded-2xl p-4 xl:w-full xl:justify-start'>
                  <div>
                     <Skeleton
                        isLoaded={!isLoading}
                        className='bg-white-50/[.06] flex h-12 w-12 rounded-full'
                     />
                  </div>
                  <div className='flex w-full flex-col gap-2'>
                     <Skeleton
                        isLoaded={!isLoading}
                        className='bg-white-50/[.06] h-3 w-3/5 rounded-lg'
                     />
                     <Skeleton
                        isLoaded={!isLoading}
                        className='bg-white-50/[.06] h-3 w-4/5 rounded-lg'
                     />
                  </div>
               </section>
            ) : (
               <section className='bg-primary-lighter flex w-fit items-center justify-center gap-4 overflow-hidden rounded-2xl xl:w-full xl:justify-start xl:p-2'>
                  <HoverCard>
                     <HoverCardTrigger
                        className={`
									transition-color
									hover:bg-primary-badge
									flex
									w-full
									cursor-pointer
									items-center
									space-x-4
									rounded-lg
									${pathname === `/en/userId` ? 'bg-primary-badge' : null}
									md:p-3
									xl:p-2
								`}>
                        {/* <Link
                           href={`/en/userId`}
                           className={`
									transition-color
									hover:bg-primary-badge
									flex
									w-full
									cursor-pointer
									items-center
									space-x-4
									rounded-lg
									${pathname === `/en/userId` ? 'bg-primary-badge' : null}
									md:p-3
									xl:p-2
								`}> */}
                        <Badge
                           content=''
                           color='success'
                           shape='circle'
                           placement='bottom-right'
                           className={`${
                              windowWidth !== null && windowWidth < 1366 ? 'h-[1.125rem] w-[1.125rem]' : 'h-5 w-5'
                           } border-primary-lighter pointer-events-none border-4`}>
                           <Avatar
                              name={'DisplayName'}
                              //src={user.avatarURL}
                              showFallback
                              fallback={
                                 <OutlineUser
                                    size={windowWidth !== null && windowWidth < 1366 ? 16 : 24}
                                    className='text-default-500'
                                    fill='currentColor'
                                 />
                              }
                              className={`${windowWidth !== null && windowWidth < 1366 ? 'h-8 w-8' : 'h-12 w-12'} bg-white/[.06] text-sm`}
                           />
                        </Badge>
                        {windowWidth !== null && windowWidth >= 1366 && (
                           <div className='flex h-full flex-1 flex-col justify-around overflow-hidden'>
                              <UserInfo
                                 variant='disabled'
                                 displayName={'DisplayName'}
                                 userID={'UserID'}
                              />
                           </div>
                        )}
                        {/* </Link> */}
                     </HoverCardTrigger>
                     <HoverCardContent
                        alignOffset={windowWidth !== null && windowWidth < 1366 ? 56 : -8}
                        sideOffset={windowWidth !== null && windowWidth < 1366 ? -56 : 16}
                        align={'start'}
                        className={`${windowWidth !== null && windowWidth < 1366 && 'ml-4'} w-fit`}>
                        <ListUser />
                     </HoverCardContent>
                  </HoverCard>
                  {/* {windowWidth !== null && windowWidth >= 1366 && (
                     <Button
                        variant={'ghost'}
                        size={'xs-icon'}>
                        <OutlineMore size={24} />
                     </Button>
                  )} */}
               </section>
            )}
         </ScrollShadow>
      </nav>
   )
}
