export const runtime = 'edge'
// import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'

import { contentData } from './data'

export const metadata = {
   title: 'Home',
   description: 'StarOwl is a social media platform that allows you to connect with artists and creators.',
}

function renderContentSection(sectionData) {
   return sectionData.map((item, index) => {
      switch (item.type) {
         case 'title':
            return (
               <h2
                  className='text-lg font-semibold text-white-50'
                  key={index}>
                  {item.content}
               </h2>
            )
         case 'subtitle':
            return (
               <h3
                  className='font-semibold text-white-100'
                  key={index}>
                  {item.content}
               </h3>
            )
         case 'microtitle':
            return (
               <h4
                  className='font-semibold text-white-200'
                  key={index}>
                  {item.content}
               </h4>
            )
         case 'paragraph':
            return (
               <p
                  className='text-white-300'
                  key={index}>
                  {item.content}
               </p>
            )
         case 'list':
            return (
               <div key={index}>
                  <h5 className='font-semibold text-white-300'>{item.title}</h5>
                  <ul className='leading-none list-disc text-white-300'>
                     {item.items.map((listItem, listItemIndex) => (
                        <li key={listItemIndex}>{listItem}</li>
                     ))}
                  </ul>
               </div>
            )
         case 'note':
            return (
               <div
                  className='relative pl-6'
                  key={index}>
                  <div className="before:content-[''] before:bg-gradient-to-b from-[#e15459] to-[#f47750] before:w-1 before:h-full before:absolute before:inset-y-0 before:left-0">
                     <p className='relative font-bold'>{item.content}</p>
                  </div>
               </div>
            )
         default:
            return null
      }
   })
}

export default function TosPage() {
   return (
      <article className='prose-sm sm:prose-lg text-white-50 lg:prose-xl'>
         <header>
            <h1 className='text-xl font-bold text-transparent bg-gradient-to-r from-[#e15459] to-[#f47750] inline-block bg-clip-text'>
               Terms of Service
            </h1>
         </header>

         {/* <div className='flex flex-col gap-6 md:flex-row justify-between'>
            <section>{renderContentSection(contentData.Prices)}</section>

            <div className='w-full lg:w-fit flex justify-center items-center'>
               <Image
                  src='/Sketch-Logo.png'
                  width={350}
                  height={350}
                  alt='sketch'
                  className='max-w-xs md:max-w-md'
               />
            </div>
         </div> */}

         <section>{renderContentSection(contentData.Payment)}</section>

         <section>{renderContentSection(contentData.Cancellations_and_Refunds)}</section>

         <section>{renderContentSection(contentData.WorkProcess)}</section>
         <section>{renderContentSection(contentData.Please_Dont)}</section>
         <section>WIP...</section>
         {/* <section>{renderContentSection(contentData.Service)}</section> */}

         {/*

         <section className='mb-8'>
            <h2 className='text-lg font-semibold text-white-50'>PLEASE DON'T DO THE FOLLOWING</h2>
            <p className='text-white-300'>
               Request design approaches so you can compare them with other designers and decide if you wish to hire me or not. If you wish to do this
               please don't bother contacting me.
            </p>
            <p className='text-white-300'>
               Please don't request new design approaches without giving feedback. I don't limit the number of design approaches or revisions but that
               doesn't mean I will make as many as you wish.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='text-lg font-semibold text-white-50'>SERVICE</h2>
            <h3 className='font-semibold text-white-200'>No limit of design approaches or revisions</h3>
            <p className='text-white-300'>
               Most design services offer only three design approaches and two changes. I don't like that system, I find it too limiting for both the
               client and the designer, so instead, I usually start doing one or two design approaches to see what are your preferences. Then I polish
               either approach or make a new one. I keep making changes until you are happy with the design and I don't charge any additional fee per
               design.
            </p>

            <div className='relative pl-6 '>
               <div className="before:content-[''] before:bg-gradient-to-b from-[#e15459] to-[#f47750] before:w-1 before:h-full before:absolute before:inset-y-0 before:left-0">
                  <p className='relative font-bold'>
                     NOTE: This doesn't mean I will keep doing design approaches infinitely, there is a time limit to ask for changes. That time is a
                     full day of work. If I consider the project is not moving forward or the amount of work have exceeded the time, I will contact
                     you and ask you if you wish to continue but with an additional fee. I won't charge any additional fee without previous notice.
                     Time counts ONLY when working on the design approaches and changes, not while waiting.
                  </p>
               </div>
            </div>

            <div className='relative pl-6 '>
               <div className="before:content-[''] before:bg-gradient-to-b from-[#e15459] to-[#f47750] before:w-1 before:h-full before:absolute before:inset-y-0 before:left-0">
                  <p className='relative font-bold'>
                     IMPORTANT NOTE: If the project doesn't move forward the designer and the client can agree in a cancelation. The client will
                     receive a refund and in exchange they agree to not keep nor share any of the design approaches received and the designer has full
                     ownership over the designs provided.
                  </p>
               </div>
            </div>

            <h3 className='font-semibold text-white-200'>High-quality editable vector files</h3>
            <p className='text-white-300'>
               I work on Adobe Illustrator (Version CS6) which is the best tool for logo design. Why? Because you can make vector files. Vector files
               allow you to resize the design without any repercussions, it's easier to change colors and select specific parts of the design to
               alter. Many designers don't offer these files because that way clients will feel compelled to come back whenever they need a change in
               the design and they can charge for it.
            </p>

            <h3 className='font-semibold text-white-200'>Additional editable .psd files</h3>
            <p className='text-white-300'>
               Usually, most of my client's requests a .PSD (Adobe Photoshop) and .PNG files. I also provide any other kind of files you require as
               long as I possess the program and exporting is possible. I don't charge any additional fees for this.
            </p>

            <h3 className='font-semibold text-white-200'>Vault Service</h3>
            <p className='text-white-300'>
               You can request new files and minor changes (Color and Text if it's editable) anytime without cost. Also, I keep a backup of all the
               files I send you in case you lose them. Still, I recommend you to be careful with them in case something happened to me.
            </p>

            <div className='relative pl-6 '>
               <div className="before:content-[''] before:bg-gradient-to-b from-[#e15459] to-[#f47750] before:w-1 before:h-full before:absolute before:inset-y-0 before:left-0">
                  <p className='relative font-bold'>
                     NOTE: You won't be able to request new files or minor changes if I find compelling evidence of you violating my Author Moral
                     Rights.
                  </p>
               </div>
            </div>

            <h3 className='font-semibold text-white-200'>All Commercial Rights</h3>
            <p className='text-white-300'>
               This is related to the last point. Some designers charge for each possible use of a design. They charge for printing, web, video, app,
               billboards, etc. I don't do that, once you paid me you can do whatever you want with your design without a need to tell me. You can
               sell it or modify it. I only keep the Author Rights which allows me to say I made the design and display it in my portfolios.
            </p>

            <div className='relative pl-6 '>
               <div className="before:content-[''] before:bg-gradient-to-b from-[#e15459] to-[#f47750] before:w-1 before:h-full before:absolute before:inset-y-0 before:left-0">
                  <p className='relative font-bold'>
                     NOTE: The Author Moral Rights aren't for sale. This means you can't claim you made any of my designs even if you request the
                     Vault Service. This doesn't apply to those designs where I was hired to only trace them into vectors or further redesigns of the
                     design I made.
                  </p>
               </div>
            </div>

            <h3 className='font-semibold text-white-200'>No Limitations of Use</h3>
            <p className='text-white-300'>
               You can use the logo unlimited times and in any media you want without requiring my permission or with an additional cost, even if you
               didn't clarify how you would use the design at the start of the project.
            </p>

            <div className='relative pl-6 '>
               <div className="before:content-[''] before:bg-gradient-to-b from-[#e15459] to-[#f47750] before:w-1 before:h-full before:absolute before:inset-y-0 before:left-0">
                  <p className='relative font-bold'>
                     NOTE: If someone contacts you requesting a fee for using your logo on websites like Youtube, Tiktok, Instagram, etc. Please know
                     IT IS NOT ME. Feel free to contact me if you require proof or purchase so you can combat a DMCA or other malicious actions. Keep
                     your PayPal invoice since all Terms of Service are on it.
                  </p>
               </div>
            </div>

            <h3 className='font-semibold text-white-200'>No additional cost for businesses</h3>
            <p className='text-white-300'>I give my 100% for each project, no matter the client. Same service for everyone, same cost.</p>

            <h3 className='font-semibold text-white-200'>Trust and Expertise</h3>
            <p className='text-white-300'>
               This point can be subjective but nonetheless is an essential part of my work. 10 years and more than 1500 successful projects can be
               evidence of my experience and dedication to giving a good service to my clients.
            </p>

            <h3 className='font-semibold text-white-200'>Postponed projects</h3>
            <p className='text-white-300'>
               The client can request to <b>postpone a project for one month</b>. If the client restarts the project within the set time they won't
               require paying the advance payment again.
            </p>

            <h3 className='font-semibold text-white-200'>Intellectual Property Rights</h3>
            <p className='text-white-300'>
               This is a professional service. All designs are protected under the
               <b>Digital Millennium Copyright Act, the Creative Commons, and the Intelectual Property Rights</b> of each country where these designs
               are registered by their rightful owners. If you try to use one of these designs without permission you may be subject to legal actions.
            </p>

            <h3 className='font-semibold text-white-200'>What happens in the case of Multiple Discovery?</h3>
            <p className='text-white-300'>
               In the case of a <b>Multiple Discovery</b> (When inventions are made independently by multiple people), the client can request a new
               design but only if it's <b>within 2 months after finishing the commission</b>.
            </p>
         </section>

         <section className='mb-8'>
            <h2 className='font-semibold text-white-50'>TERMS AND CONDITIONS OF THE SERVICE</h2>
            <ul className='leading-none list-disc text-white-300'>
               <li>The client agrees to cover the full fee to start the project.</li>
               <li>
                  The client is responsible for all resources they provide to be used on their project. The designer is not liable in case those
                  resources are stolen or have limited commercial rights.
               </li>
               <li>The designer can't keep nor share any of the resources provided by the client to be used on their project.</li>
               <li>The client can't keep nor share any design approaches with other designers or artists to replicate or modify.</li>
               <li>
                  Once the client receives the final files (.ai, .eps, .psd, and other requested formats), the client accepts he/she/they are
                  satisfied with the design provided and the price established.
               </li>
               <li>There are no refunds once the first design approach is sent.</li>
               <li>The client can request minor changes to the design any time he/she/they desire.</li>
               <li>The client can request new files anytime he/she/they desire.</li>
               <li>The client has full commercial ownership of the design with all the rights it entails.</li>
               <li>The designer keeps the author's moral rights to promote and display the work as made by him.</li>
               <li>The client can't promote himself/herself/themselves as the creators of the design.</li>
               <li>All unused design approaches belong to the designer.</li>
               <li>
                  The designer can re-use, recycle, modify, share or sell any unused design approaches that aren't variants of the chosen design.
               </li>
               <li>
                  The client can redesign, modify or alter the design in any way he/she wants. The designer will only keep the author's rights over
                  the original design.
               </li>
            </ul>
         </section>

         <section className='mb-8'>
            <h2 className='text-lg font-semibold text-white-50 uppercase'>Commonly Asked Questions</h2>

            <h3 className='font-semibold text-white-200'>Can I use the logo I commissioned on other websites?</h3>
            <p className='text-white-300'>
               Absolutely yes. You can use the logo however you want. The logo is an identity and as an identity, you can use it in any way you feel
               is right to identify yourself.
            </p>

            <h3 className='font-semibold text-white-200'>Can I commercialize the design? </h3>
            <p className='text-white-300'>
               Yes. All commercial rights belong to you the moment you pay me. That's why I send the original editable files. While you commercialize
               the design, you can't promote yourself as the creator of the design.
            </p>

            <h3 className='font-semibold text-white-200'>Can I resell the design? </h3>
            <p className='text-white-300'>
               Yes. As mentioned before you own all commercial rights, including selling the identity. But keep in mind that you can't violate my
               author's moral rights, which means you can't promote yourself as the author of the design neither the new buyer, nor you can agree with
               a third party to pull down all images containing the design, including those on my portfolios.
            </p>

            <h3 className='font-semibold text-white-200'>Can I purchase the author's moral rights? </h3>
            <p className='text-white-300'>
               No, but you can request the <b>Vault Service</b> so the design won't be displayed in my portfolios. Still, this doesn't mean that you
               can claim you made the design but you don't have to tell others I did it.
            </p>

            <h3 className='font-semibold text-white-200 text-center'>
               For any questions please feel free to send me a note in deviantART or contact me through email or other social media.
            </h3>
         </section> */}
      </article>
   )
}
