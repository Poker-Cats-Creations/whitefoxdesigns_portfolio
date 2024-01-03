'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/Utils'
import { Button } from '@/components/atom/Button'
import { Calendar } from '@/components/atom/Calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/atom/Popover'

export function DatePickerDemo() {
   const [date, setDate] = React.useState<Date>()

   return (
      <Popover>
         <PopoverTrigger asChild>
            <Button
               variant={'outline'}
               className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
               <CalendarIcon className='mr-2 h-4 w-4' />
               {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent className='w-auto p-0'>
            <Calendar
               mode='single'
               selected={date}
               onSelect={setDate}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   )
}
