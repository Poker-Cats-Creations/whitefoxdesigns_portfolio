'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/atom/Button'
import { SignUpValidation } from '@/lib/validation'
import { useForm } from 'react-hook-form'

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/atom/Form'
import { CircularProgress, Input, Spacer, Select, SelectItem } from '@nextui-org/react'
import React, { useMemo, useState } from 'react'
import { DuotoneMail, DuotoneReceipt, DuotoneUser, OutlineEye, OutlineEyeOff } from '@/icons/Icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getPasswordStrengthIcon } from '@/lib/validation/PasswordStrenght'
import { useToast } from '../atom/Toast'
import { Calendar } from '../atom/Calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { cn } from '@/lib/Utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

const SignupForm = () => {
   const [isPassVisible, setIsPassVisible] = React.useState(false)
   const [page, setPage] = useState(1)
   let { showToast } = useToast()

   const onNext = async () => {
      setPage(2)
   }

   const onBack = async () => {
      setPage(1)
   }

   // function getCurrentDateTime() {
   // 	const now = new Date()

   // 	const month = now.getMonth() + 1 // Months are 0-based
   // 	const day = now.getDate()
   // 	const year = now.getFullYear()

   // 	let hours = now.getHours()
   // 	const ampm = hours >= 12 ? 'PM' : 'AM'

   // 	hours = hours % 12
   // 	hours = hours ? hours : 12 // the hour '0' should be '12'
   // 	const minutes = String(now.getMinutes()).padStart(2, '0')
   // 	const seconds = String(now.getSeconds()).padStart(2, '0')

   // 	const dateStr = `${month}/${day}/${year}`
   // 	const timeStr = `${hours}:${minutes} ${ampm}`

   // 	return `${dateStr} and ${timeStr}`
   // }

   const isLoadingDummy = false
   //const navigate = useRouter()

   const form = useForm<z.infer<typeof SignUpValidation>>({
      resolver: zodResolver(SignUpValidation),
      defaultValues: {
         email: '',
         password: '',
         confirm_password: '',
         displayName: '',
         code: '',
         dob: undefined, //TODO: add Date of birth to form (as second page)
      },
   })

   // TODO: onSubmit Form
   async function onSubmit(values: z.infer<typeof SignUpValidation>) {
      console.log('test')
      showToast({ title: 'Title', body: 'Body' })
      const inviteCode = values.code
      if (!inviteCode) {
         console.log('test')
         showToast({ title: 'Error', body: 'please entrer your invite code!' })
      }

      // if (!inviteCode) {
      // 	return toast({
      // 		title: 'please entrer your invite code!',
      // 	})
      // }
      // const newUser = await createUserAccount(values)
      // if (!newUser) {
      // 	return toast({
      // 		title: 'Sign up failed. Please try again. 101',
      // 	})
      // }
      // const session = await signInAccount({
      // 	email: values.email,
      // 	password: values.password,
      // })
      // if (!session) {
      // 	return toast({ title: 'Sign in fail. Please try again. 102' })
      // }
      // const isLoggedIn = await checkAuthUser()
      // if (isLoggedIn) {
      // 	form.reset()
      // 	navigate('/')
      // } else {
      // 	return toast({ title: 'Sign up failed, Please try again. 103' })
      // }
      // console.log(newUser)
   }

   const {
      formState: { errors },
   } = form

   const isEmailInvalid = !!errors.email
   const isPasswordInvalid = !!errors.password
   const isConfirmPasswordInvalid = !!errors.confirm_password
   const isDisplayNameInvalid = !!errors.displayName
   const isCodeInvalid = !!errors.code

   //TODO: error handler for date (search for #date)
   // const isDayInvalid = !!errors.day
   // const isMonthInvalid = !!errors.month
   // const isYearInvalid = !!errors.year

   const currentDate = new Date()
   const minDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate())
   const maxDate = new Date(currentDate.getFullYear() - 13, currentDate.getMonth(), currentDate.getDate())

   const getInputIconStyle = (isInvalid) => [
      '!bg-primary-dark',
      'text-white-500',
      //'group-hover/input:text-accent-600',
      //'group-data-[focus]input:text-accent-600',
      isInvalid && 'text-danger-500',
      'p-4',
      'ring-1',
      '!transition-all',
      'ring-primary-badge',
      //'group-hover/input:ring-accent-600',
      //'group-data-[focus]:ring-accent-600',
      isInvalid && 'ring-danger-500',
      'disabled:cursor-default',
      'disabled:opacity-100',
      'disabled:hover:text-white-500',
      isInvalid && 'disabled:hover:text-danger-500',
   ]

   const styles = {
      inputWrapper: [
         'group',
         'h-fit',
         '!p-0',
         'ring-1',
         'ring-primary-badge',
         '!transition-all',
         'bg-primary-dark',
         'data-[hover]:bg-primary-dark',
         'data-[hover]:ring-accent-600',
         'group-data-[focus]:bg-primary-dark',
         'group-data-[focus]:ring-accent-600',
         'group-data-[focus]:border-0',
         'group-data-[invalid]:ring-danger-500',
         'disabled:opacity-50',
         'disabled:data-[hover]bg-primary-dark',
      ],
      innerWrapper: [`p-0`],
      label: [
         'mx-2',
         'px-2',
         'bg-inherit',
         'group-data-[hover]:text-accent-600',
         'group-data-[focus]:text-accent-600',
         'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_+_12px)]',
         'group-data-[invalid]:!text-danger-500',
      ],
      input: ['py-[1.125rem]', 'px-4', '!border-0', '!ring-0', 'group-data-[invalid]:!text-danger-500'],
      input_icon: [
         '!bg-primary-dark',
         'text-white-500',
         'p-4',
         'ring-1',
         'ring-primary-badge',
         'disabled:cursor-default',
         'disabled:opacity-100',
         'disabled:hover:text-white-500',
      ],
      errorMessage: ['text-danger-500'],
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-3 w-full md:w-[36rem] h-full flex-1 flex flex-col justify-between'>
            {
               /************
                *  PAGE 1  *
                ************/

               page === 1 ? (
                  <React.Fragment>
                     <div className='flex flex-col w-full space-y-3 flex-1 justify-end'>
                        {/**********
                         *  EMAIL  *
                         **********/}

                        <FormField
                           control={form.control}
                           name='email'
                           render={({ field }) => (
                              <FormItem>
                                 <FormControl>
                                    <div className='items-top flex space-x-3'>
                                       <Button
                                          disabled
                                          variant={'ghost'}
                                          className={getInputIconStyle(isEmailInvalid).join(' ')}
                                          size={'default-icon'}>
                                          <DuotoneMail size={24} />
                                       </Button>
                                       <Input
                                          type='text'
                                          key={'inside'}
                                          isInvalid={isEmailInvalid}
                                          {...field}
                                          label='Email'
                                          classNames={{
                                             ...styles,
                                             input: styles.input.join(' '),
                                             inputWrapper: styles.inputWrapper.join(' '),
                                             label: styles.label.join(' '),
                                             errorMessage: styles.errorMessage.join(' '),
                                          }}
                                       />
                                    </div>
                                 </FormControl>
                                 {isEmailInvalid ? (
                                    <FormMessage className='text-danger-500' />
                                 ) : (
                                    <FormDescription className='text-white-500'>We will not share your email with anyone.</FormDescription>
                                 )}
                              </FormItem>
                           )}
                        />

                        {/*************
                         *  PASSWORD  *
                         *************/}

                        <FormField
                           control={form.control}
                           name='password'
                           render={({ field }) => (
                              <FormItem>
                                 <FormControl>
                                    <div className='group/input flex items-center space-x-3'>
                                       <Button
                                          disabled
                                          variant={'ghost'}
                                          className={getInputIconStyle(isPasswordInvalid).join(' ')}
                                          size={'default-icon'}>
                                          {getPasswordStrengthIcon(field.value)}
                                       </Button>

                                       <Input
                                          {...field}
                                          type={isPassVisible ? 'text' : 'password'}
                                          key={'inside'}
                                          label='Password'
                                          isInvalid={isPasswordInvalid}
                                          classNames={{
                                             ...styles,
                                             input: styles.input.join(' '),
                                             inputWrapper: styles.inputWrapper.join(' '),
                                             label: styles.label.join(' '),
                                             errorMessage: styles.errorMessage.join(' '),
                                          }}
                                          endContent={
                                             <Button
                                                type='button'
                                                variant={'ghost'}
                                                className='!p-[1rem] text-white-500'
                                                size={'default-icon'}
                                                onClick={() => setIsPassVisible(!isPassVisible)}>
                                                {isPassVisible ? (
                                                   <OutlineEye
                                                      size={24}
                                                      className='pointer-events-none text-2xl text-default-400'
                                                   />
                                                ) : (
                                                   <OutlineEyeOff
                                                      size={24}
                                                      className='pointer-events-none text-2xl text-default-400'
                                                   />
                                                )}
                                             </Button>
                                          }
                                       />
                                    </div>
                                 </FormControl>
                                 {/* <FormDescription className='text-white-500'>Closed padlock means the password is secure.</FormDescription> */}
                                 {/* <FormMessage className='text-danger' /> */}
                              </FormItem>
                           )}
                        />
                        <FormField
                           control={form.control}
                           name='confirm_password'
                           render={({ field }) => (
                              <FormItem>
                                 <FormControl>
                                    <div className='flex items-center space-x-3'>
                                       <Button
                                          disabled
                                          variant={'ghost'}
                                          className={getInputIconStyle(isConfirmPasswordInvalid).join(' ')}
                                          size={'default-icon'}>
                                          {getPasswordStrengthIcon(field.value)}
                                       </Button>

                                       <Input
                                          {...field}
                                          type={isPassVisible ? 'text' : 'password'}
                                          key={'inside'}
                                          label='Confirm Password'
                                          isInvalid={isConfirmPasswordInvalid}
                                          classNames={{
                                             ...styles,
                                             input: styles.input.join(' '),
                                             inputWrapper: styles.inputWrapper.join(' '),
                                             label: styles.label.join(' '),
                                             errorMessage: styles.errorMessage.join(' '),
                                          }}
                                          endContent={
                                             <Button
                                                type='button'
                                                variant={'ghost'}
                                                className='!p-[1rem] text-white-500'
                                                size={'default-icon'}
                                                onClick={() => setIsPassVisible(!isPassVisible)}>
                                                {isPassVisible ? (
                                                   <OutlineEye
                                                      size={24}
                                                      className='pointer-events-none text-2xl text-default-400'
                                                   />
                                                ) : (
                                                   <OutlineEyeOff
                                                      size={24}
                                                      className='pointer-events-none text-2xl text-default-400'
                                                   />
                                                )}
                                             </Button>
                                          }
                                       />
                                    </div>
                                 </FormControl>
                                 {isPasswordInvalid || isConfirmPasswordInvalid ? (
                                    <FormMessage className='text-danger-500' />
                                 ) : (
                                    <FormDescription className='text-white-500'>Closed padlock means the password is secure.</FormDescription>
                                 )}
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className='flex flex-col items-end space-y-6'>
                        <p className='text-small-regular text-light-2 mt-2 text-center'>
                           <Spacer y={4} />
                           Already have an account?
                           <Link
                              href='/sign-in'
                              className='text-small-semibold ml-1 text-accent-500'>
                              Sign In
                           </Link>
                        </p>

                        <Spacer y={1} />
                        <div className='flex w-full justify-between items-center space-x-6'>
                           <p className='text-foreground-500'>step: {page}</p>
                           <Button
                              type='button'
                              disabled={isLoadingDummy}
                              onClick={() => {
                                 onNext()
                              }}>
                              {isLoadingDummy ? (
                                 <CircularProgress
                                    classNames={{
                                       svg: 'h-6 w-6',
                                       indicator: 'stroke-white',
                                       track: 'stroke-white/[.12]',
                                    }}
                                 />
                              ) : (
                                 'Next'
                              )}
                           </Button>
                        </div>
                     </div>
                  </React.Fragment>
               ) : (
                  /************
                   *  PAGE 2  *
                   ************/

                  <React.Fragment>
                     <div className='flex flex-col w-full space-y-3 flex-1 justify-end'>
                        {/*****************
                         *  DISPLAY NAME  *
                         ******************/}
                        <FormField
                           control={form.control}
                           name='displayName'
                           render={({ field }) => (
                              <FormItem>
                                 <FormControl>
                                    <div className='flex items-center space-x-3'>
                                       <Button
                                          disabled
                                          type='button'
                                          variant={'ghost'}
                                          className={getInputIconStyle(isDisplayNameInvalid).join(' ')}
                                          size={'default-icon'}>
                                          <DuotoneUser size={24} />
                                       </Button>

                                       <Input
                                          key={'inside'}
                                          type='text'
                                          {...field}
                                          label='Display Name'
                                          isInvalid={isDisplayNameInvalid}
                                          classNames={{
                                             ...styles,
                                             input: styles.input.join(' '),
                                             inputWrapper: styles.inputWrapper.join(' '),
                                             label: styles.label.join(' '),
                                             errorMessage: styles.errorMessage.join(' '),
                                          }}
                                       />
                                    </div>
                                 </FormControl>
                                 {/* <FormDescription className='text-white-500'>Closed padlock means the password is secure.</FormDescription> */}
                                 {/* <FormMessage className='text-danger' /> */}
                              </FormItem>
                           )}
                        />

                        <FormField
                           control={form.control}
                           name='dob'
                           render={({ field }) => (
                              <FormItem className='flex flex-col'>
                                 <Popover>
                                    <PopoverTrigger asChild>
                                       <FormControl>
                                          <div className='flex items-center space-x-3'>
                                             <Button
                                                disabled
                                                type='button'
                                                variant={'ghost'}
                                                className={getInputIconStyle(false).join(' ')}
                                                size={'default-icon'}>
                                                <DuotoneUser size={24} />
                                             </Button>

                                             <Button
                                                className='w-full'
                                                type='button'
                                                size='input'
                                                variant='input'>
                                                {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                                             </Button>
                                          </div>
                                       </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                       className='w-auto p-0 z-50'
                                       align='start'>
                                       <Calendar
                                          mode='single'
                                          captionLayout='dropdown-buttons'
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          disabled={(date) => date > maxDate || date < minDate}
                                          defaultMonth={new Date(2000, 1)}
                                          fromYear={currentDate.getFullYear() - 100}
                                          toYear={currentDate.getFullYear() - 13}
                                          initialFocus
                                       />
                                    </PopoverContent>
                                 </Popover>
                                 {/* <FormDescription>Your date of birth is used to calculate your age.</FormDescription> */}
                                 <FormMessage />
                              </FormItem>
                           )}
                        />

                        <div className='!my-4 space-y-2'>
                           <h5 className='text-xl font-bold'>Date of birth</h5>
                           <p className='text-white-500'>
                              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                           </p>
                        </div>
                        {/* {!isValidAge && <FormDescription className='text-danger-500'>You must be at least 13 years old</FormDescription>} */}

                        {/****************
                         *  INVITE CODE  *
                         *****************/}
                        <FormField
                           control={form.control}
                           name='code'
                           render={({ field }) => (
                              <FormItem>
                                 <FormControl>
                                    <div className='flex items-center space-x-3'>
                                       <Button
                                          disabled
                                          variant={'ghost'}
                                          className={getInputIconStyle(isCodeInvalid).join(' ')}
                                          size={'default-icon'}>
                                          <DuotoneReceipt size={24} />
                                       </Button>

                                       <Input
                                          {...field}
                                          type={'text'}
                                          key={'inside'}
                                          label='Invite Code'
                                          isInvalid={isCodeInvalid}
                                          classNames={{
                                             ...styles,
                                             input: styles.input.join(' '),
                                             inputWrapper: styles.inputWrapper.join(' '),
                                             label: styles.label.join(' '),
                                             errorMessage: styles.errorMessage.join(' '),
                                          }}
                                       />
                                    </div>
                                 </FormControl>
                                 <FormMessage className='text-danger-500' />
                              </FormItem>
                           )}
                        />
                     </div>

                     <div className='flex flex-col items-end space-y-6'>
                        <p className='text-small-regular text-light-2 mt-2 text-center'>
                           <Spacer y={4} />
                           Already have an account?
                           <Link
                              href='/sign-in'
                              className='text-small-semibold ml-1 text-accent-500'>
                              Sign In
                           </Link>
                        </p>

                        <Spacer y={1} />
                        <div className='flex w-full justify-between items-center space-x-6'>
                           <p className='text-foreground-500'>step: {page}</p>
                           <div className='flex-end space-x-6'>
                              <Button
                                 variant={'ghost'}
                                 type='button'
                                 onClick={() => onBack()}>
                                 Back
                              </Button>
                              <Button
                                 type='submit'
                                 disabled={isLoadingDummy}
                                 onClick={() => {
                                    showToast({ title: 'Success', body: 'User saved!' })
                                 }}>
                                 {isLoadingDummy ? (
                                    <CircularProgress
                                       classNames={{
                                          svg: 'h-6 w-6',
                                          indicator: 'stroke-white',
                                          track: 'stroke-white/[.12]',
                                       }}
                                    />
                                 ) : (
                                    'Register'
                                 )}
                              </Button>
                           </div>
                        </div>
                     </div>
                  </React.Fragment>
               )
            }
         </form>
      </Form>
   )
}

export default SignupForm
