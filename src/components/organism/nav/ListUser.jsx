import React from 'react'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { ListboxWrapper } from '@/components/molecule/ListBoxWrapper'
import UserInfo from '@/components/molecule/UserInfo'
import { Avatar } from '@nextui-org/react'
import { OutlineUser } from '@/icons/Icons'

const ListUser = () => {
   const [selectedKeys, setSelectedKeys] = React.useState(new Set(['text']))

   const selectedValue = React.useMemo(() => Array.from(selectedKeys).join(', '), [selectedKeys])

   return (
      <div className='flex flex-col gap-2'>
         <ListboxWrapper>
            <Listbox
               aria-label='Single selection example'
               variant='flat'
               disallowEmptySelection
               selectionMode='single'
               selectedKeys={selectedKeys}
               onSelectionChange={setSelectedKeys}
               className='p-0'
               //className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
               itemClasses={{
                  base: 'p-2 data-[hover=true]:bg-primary-badge data-[selected=true]:bg-error-600',
               }}
               classNames={{
                  list: 'gap-2',
               }}>
               <ListboxItem
                  key='user1'
                  classNames={{
                     title: 'flex gap-4',
                  }}>
                  <Avatar
                     name={'DisplayName'}
                     //src={user.avatarURL}
                     showFallback
                     fallback={
                        <OutlineUser
                           size={24}
                           className='text-default-500'
                           fill='currentColor'
                        />
                     }
                     className={`h-12 w-12 bg-white/[.06] text-sm`}
                  />
                  <div className='flex h-full flex-1 flex-col justify-around overflow-hidden'>
                     <UserInfo
                        variant='disabled'
                        displayName={'DisplayName'}
                        userID={'UserID'}
                     />
                  </div>
               </ListboxItem>
               <ListboxItem
                  key='user2'
                  classNames={{
                     title: 'flex gap-4',
                  }}>
                  <Avatar
                     name={'DisplayName'}
                     //src={user.avatarURL}
                     showFallback
                     fallback={
                        <OutlineUser
                           size={24}
                           className='text-default-500'
                           fill='currentColor'
                        />
                     }
                     className={`h-12 w-12 bg-white/[.06] text-sm`}
                  />
                  <div className='flex h-full flex-1 flex-col justify-around overflow-hidden'>
                     <UserInfo
                        variant='disabled'
                        displayName={'DisplayName'}
                        userID={'UserID'}
                     />
                  </div>
               </ListboxItem>
            </Listbox>
         </ListboxWrapper>
         {/* <ListboxWrapper>
            <Listbox
               aria-label='Single selection example'
               variant='flat'
               disallowEmptySelection
               selectionMode='single'
               selectedKeys={selectedKeys}
               onSelectionChange={setSelectedKeys}
               className='p-0'
               //className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
               itemClasses={{
                  base: 'p-4 data-[hover=true]:bg-white-50/[.06]',
               }}
               classNames={{
                  list: 'gap-2',
               }}>
               <ListboxItem key='text'>Text</ListboxItem>
               <ListboxItem key='number'>Number</ListboxItem>
               <ListboxItem key='date'>Date</ListboxItem>
               <ListboxItem key='single_date'>Single Date</ListboxItem>
               <ListboxItem key='iteration'>Iteration</ListboxItem>
            </Listbox>
         </ListboxWrapper> */}
         {/* <p className='text-small px-2 mb-2 text-default-500'>Selected value: {selectedValue}</p> */}
      </div>
   )
}

export default ListUser
