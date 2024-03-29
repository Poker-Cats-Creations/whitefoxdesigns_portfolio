'use client'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/Utils'

const buttonVariants = cva(
   'inline-flex items-center justify-center capitalize gap-[0.75rem] leading-normal transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold',
   {
      variants: {
         variant: {
            empty: '',
            default:
               'text-primary-dark bg-white-50 hover:text-white-50 hover:bg-primary-badge active:bg-accent-800 disabled:bg-accent-600 focus:outline outline-1 outline-offset-4 outline-accent-50',
            secondary:
               'text-accent-300 bg-transparent ring-1 ring-inset ring-accent-300 hover:bg-accent-950 active:bg-accent-900 disabled:bg-transparent',
            outline:
               'bg-transparent ring-1 ring-inset ring-white-50 hover:text-white-300 hover:ring-white-300 hover:bg-white-50/[.06] active:bg-white-50/[.12] disabled:bg-transparent',
            ghost: 'hover:text-white-300 hover:bg-white-50/[.06] active:bg-white-50/[.12] disabled:bg-transparent',
            dimmed: 'bg-black/[.12] backdrop-blur-md hover:bg-black/[.24]',
            link: 'text-accent-600 underline-offset-4 hover:underline',
            counter: 'bg-transparent hover:bg-transparent justify-start',
            accent:
               'text-accent-50 bg-accent-600 hover:bg-accent-700 active:bg-accent-800 disabled:bg-accent-600 focus:outline outline-1 outline-offset-4 outline-accent-50',
            danger: 'text-danger-50 bg-danger-600 hover:bg-danger-700 active:bg-danger-800 disabled:bg-danger-600',
            warning: 'text-warning-50 bg-warning-600 hover:bg-warning-700 active:bg-warning-800 disabled:bg-warning-600',
            success: 'text-success-50 bg-success-600 hover:bg-success-700 active:bg-success-800 disabled:bg-success-600',
            input: 'justify-start font-default ring-1 ring-primary-badge text-foreground-500',
         },
         rounded: {
            true: '!rounded-full',
         },
         size: {
            counter: 'p-0 gap-0 font-normal',
            link: 'p-0',
            input: 'rounded-xl p-4 font-normal w-full',
            xs: 'rounded-[0.5rem] px-[.938rem] py-[.469rem]',
            sm: 'rounded-[0.625rem] px-[1.5rem] py-[.75rem]',
            default: 'text-sm rounded-[.625rem] px-[1.624rem] py-[.812rem] md:text-base md:rounded-[0.875rem] md:px-[2rem] md:py-[1rem]',
            lg: 'rounded-2xl px-[2.5rem] py-[1.250rem]',
            'xs-icon': 'rounded-[0.5rem] p-[.5rem]',
            'sm-icon': 'rounded-[0.625rem] p-[.625rem] md:p-[.75rem]',
            'default-icon': 'rounded-[.625rem] p-[.5rem] md:rounded-[.875rem] md:p-[1rem]',
            'lg-icon': 'rounded-[.75rem] p-[.75rem] md:rounded-[.875rem] md:p-[1rem]',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
   asChild?: boolean
   icon?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, rounded, size, asChild = false, icon = false, ...props }, ref) => {
      if (icon) {
         size = `${size}-icon` as 'default' | 'sm' | 'lg'
      }

      const Comp = asChild ? Slot : 'button'
      return (
         <Comp
            className={` ${cn(buttonVariants({ variant, rounded, size, className }))}`}
            ref={ref}
            {...props}
         />
      )
   }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
