import Link from 'next/link'
import React from 'react'

export const contentData = {
   Prices: [
      {
         type: 'title',
         content: 'Prices',
      },
      {
         type: 'list',
         title: '- Logo Design $150 USD',
         items: [
            'Single Payment',
            'No limit of design approaches or revisions',
            'High-quality editable vector files',
            'Additional editable .psd files',
            'Vault Service',
            'Follow-up after the project is completed',
            'All Commercial Rights',
            'All Media Uses Allowed',
         ],
      },
      {
         type: 'microtitle',
         content: '- Business Card Design $40 USD (Subject to availability)',
      },
      {
         type: 'microtitle',
         content: '- Priority Projects additional $70 USD (Subject to availability) (Receive the first design approach within 72 hrs)',
      },
      {
         type: 'note',
         content:
            'IMPORTANT NOTE: The cost may increase if the workload exceeds the amount of a usual project. For further information please read the SERVICE section.',
      },
   ],
   Payment: [
      {
         type: 'title',
         content: 'Payment',
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               To request a commission you will need to make a full payment of <b className='mx-1'>$150 USD</b>, only then the project will be
               considered
               <b className='mx-1'>&quot;active&quot;</b>. I only accept payments through <b className='mx-1'>Paypal</b>.
            </React.Fragment>
         ),
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               I will require your email tied to Paypal to send you an invoice that comes with <b className='mx-1'>Terms and Conditions</b> of the
               service provided.
            </React.Fragment>
         ),
      },
      {
         type: 'note',
         content: 'IMPORTANT NOTE: Please don’t send any payment without receiving an invoice first.',
      },
   ],
   Cancellations_and_Refunds: [
      {
         type: 'title',
         content: 'Cancellations & Refunds',
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               The payment is <b className='mx-1'>nonrefundable after the first design approach is sent.</b> Before then, the client can request a
               full refund
               <b className='mx-1'>(Transaction fees not included).</b>
            </React.Fragment>
         ),
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               A project is considered <b className='mx-1'>abandoned</b> if the designer doesn&quot;t receive a reply within
               <b className='mx-1'>10 days</b> after the last communication with the client.
            </React.Fragment>
         ),
      },
      {
         type: 'note',
         content: `IMPORTANT NOTES: A project canceled because of abandonment isn't entitled to a refund.`,
      },
   ],
   WorkProcess: [
      {
         type: 'title',
         content: 'Work Process',
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               Please send an email to
               <Link
                  href='mailto:commissions@whitefoxdesigns.net'
                  className='link-gradient mx-1'>
                  commissions@whitefoxdesigns.net
               </Link>
               ,
               <Link
                  href='https://twitter.com/WhiteFoxDesign2'
                  target='_blank'
                  className='link-gradient mx-1'>
                  Twitter DM
               </Link>
               , or Discord
               <Link
                  href='https://discordapp.com/users/113042224987525120'
                  target='_blank'
                  className='link-gradient mx-1'>
                  @whitefox.designs
               </Link>
               with the following information:
            </React.Fragment>
         ),
      },
      {
         type: 'list',
         title: 'For Logos:',
         items: [
            'Name of the Project or Text that will go on the design.',
            <React.Fragment key={0}>
               Name of the owner of the copyrights (Full Name, Company Name or Social Media alias)
               <b className='mx-1'>This name will be referenced by the designer on his online portfolios.</b>
            </React.Fragment>,
            <React.Fragment key={0}>
               Information about the company, service, character, or any other pertinent information and resources required for the realization of the
               design.
               <b className='mx-1'>
                  Please make sure you have full rights over all characters, fonts, and colors you request to be part of your design.
               </b>
            </React.Fragment>,
            'Specify what you want for the design (image, text, or text and image)',
            <React.Fragment key={0}>
               If possible provide an example of logo designs that you like. Look at my gallery and sites like <b className='mx-1'>Dribble</b> and
               <b className='mx-1'>Logopond</b> for inspiration.
            </React.Fragment>,
            <React.Fragment key={0}>
               Please tell me if you need a specific color or palette of colors in your logo. Especially if you require a
               <b className='mx-1'>PANTONE</b> for printing. <b className='mx-1'>(I do not provide PANTONES)</b>
            </React.Fragment>,
            <React.Fragment key={0}>
               Set a deadline for the conclusion of the project. Please consider a{' '}
               <b className='mx-1'>minimum of four weeks is required after the project has started.</b>
            </React.Fragment>,
            'An email address linked to Paypal.',
            <React.Fragment key={0}>
               Please specify if you wish to use the <b className='mx-1'>Vault Service</b> if you wish for the logo to not be displayed publicly.
            </React.Fragment>,
         ],
      },
      {
         type: 'list',
         title: 'For Business Cards:',
         items: [
            'Size',
            'If it the card will have one or two sides',
            'Details that you want to be included in the card (Logo, Name, Address, Contact info, ect)',
            'Specify what you want for the design (image, text, or text and image)',
            'Additional details you want (colors, shape not rectangular, additional tints, etc)',
         ],
      },
      {
         type: 'note',
         content: 'NOTE: If there are prior projects in progress, there can be a delay of one or more weeks before I can start your project.',
      },
      {
         type: 'note',
         content:
            "NOTE: If you wish to Commission a logo but you aren't sure of what you want please feel free to send a note and request an Advisory. It doesn't have a cost.",
      },
      {
         type: 'list',
         title: 'Once the project starts the designer will provide with:',
         items: [
            'An initial design approach. It can be one or more cleaned designs (No sketches)',
            <React.Fragment key={0}>
               Frequent updates based on the client&apos;s speed of response and changes requested. All updates are on .jpg files of 25% of the actual
               size of the design. <b className='mx-1'>No high-resolution images are provided at this stage.</b>
            </React.Fragment>,
            'Varied options for the design like black and white, single-color, icon only, text only, etc.',
            'When a design is approved the designer will provide the original vector files and other formats requested. ',
         ],
      },
   ],
   Please_Dont: [
      {
         type: 'title',
         content: "Please Don't Do The Following",
      },
      {
         type: 'paragraph',
         content:
            "Request design approaches so you can compare them with other designers and decide if you wish to hire me or not. If you wish to do this please don't bother contacting me.",
      },
      {
         type: 'paragraph',
         content:
            "Please don't request new design approaches without giving feedback. I don't limit the number of design approaches or revisions but that doesn't mean I will make as many as you wish.",
      },
   ],
   Service: [
      {
         type: 'title',
         content: 'Service',
      },
      {
         type: 'microtitle',
         content: 'No limit of design approaches or revisions',
      },
      {
         type: 'paragraph',
         content:
            "Most design services offer only three design approaches and two changes. I don't like that system, I find it too limiting for both the client and the designer, so instead, I usually start doing one or two design approaches to see what are your preferences. Then I polish either approach or make a new one. I keep making changes until you are happy with the design and I don't charge any additional fee per design.",
      },
      {
         type: 'note',
         content:
            "NOTE: This doesn't mean I will keep doing design approaches infinitely, there is a time limit to ask for changes. That time is a full day of work. If I consider the project is not moving forward or the amount of work have exceeded the time, I will contact you and ask you if you wish to continue but with an additional fee. I won't charge any additional fee without previous notice. Time counts ONLY when working on the design approaches and changes, not while waiting.",
      },
      {
         type: 'note',
         content:
            "IMPORTANT NOTE: If the project doesn't move forward the designer and the client can agree in a cancelation. The client will receive a refund and in exchange they agree to not keep nor share any of the design approaches received and the designer has full ownership over the designs provided.",
      },
      {
         type: 'microtitle',
         content: 'High-quality editable vector files',
      },
      {
         type: 'paragraph',
         content:
            "I work on Adobe Illustrator (Version CS6) which is the best tool for logo design. Why? Because you can make vector files. Vector files allow you to resize the design without any repercussions, it's easier to change colors and select specific parts of the design to alter. Many designers don't offer these files because that way clients will feel compelled to come back whenever they need a change in the design and they can charge for it.",
      },
      {
         type: 'microtitle',
         content: 'Additional editable .psd files',
      },
      {
         type: 'paragraph',
         content:
            "Usually, most of my client's requests a .PSD (Adobe Photoshop) and .PNG files. I also provide any other kind of files you require as long as I possess the program and exporting is possible. I don't charge any additional fees for this.",
      },
      {
         type: 'microtitle',
         content: 'Vault Service',
      },
      {
         type: 'paragraph',
         content: "The vault is a service you can request to keep your design in storage, which means I won't display it on my online portfolios.",
      },
      {
         type: 'microtitle',
         content: 'Follow-up after the project is completed',
      },
      {
         type: 'paragraph',
         content:
            "You can request new files and minor changes (Color and Text if it's editable) anytime without cost. Also, I keep a backup of all the files I send you in case you lose them. Still, I recommend you to be careful with them in case something happened to me.",
      },
      {
         type: 'note',
         content:
            "NOTE: You won't be able to request new files or minor changes if I find compelling evidence of you violating my Author Moral Rights.",
      },
      {
         type: 'microtitle',
         content: 'All Commercial Rights',
      },
      {
         type: 'paragraph',
         content:
            "This is related to the last point. Some designers charge for each possible use of a design. They charge for printing, web, video, app, billboards, etc. I don't do that, once you paid me you can do whatever you want with your design without a need to tell me. You can sell it or modify it. I only keep the Author Rights which allows me to say I made the design and display it in my portfolios.",
      },
      {
         type: 'note',
         content:
            "NOTE: The Author Moral Rights aren't for sale. This means you can't claim you made any of my designs even if you request the Vault Service. This doesn't apply to those designs where I was hired to only trace them into vectors or further redesigns of the design I made.",
      },
      {
         type: 'microtitle',
         content: 'No Limitations of Use',
      },
      {
         type: 'paragraph',
         content:
            "You can use the logo unlimited times and in any media you want without requiring my permission or with an additional cost, even if you didn't clarify how you would use the design at the start of the project.",
      },
      {
         type: 'note',
         content:
            'NOTE: If someone contacts you requesting a fee for using your logo on websites like Youtube, Tiktok, Instagram, etc. Please know IT IS NOT ME. Feel free to contact me if you require proof or purchase so you can combat a DMCA or other malicious actions. Keep your PayPal invoice since all Terms of Service are on it.',
      },
      {
         type: 'microtitle',
         content: 'No additional cost for businesses',
      },
      {
         type: 'paragraph',
         content: 'I give my 100% for each project, no matter the client. Same service for everyone, same cost.',
      },
      {
         type: 'microtitle',
         content: 'Trust and Expertise',
      },
      {
         type: 'paragraph',
         content:
            'This point can be subjective but nonetheless is an essential part of my work. 10 years and more than 1500 successful projects can be evidence of my experience and dedication to giving a good service to my clients.',
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               You can also visit my
               <Link
                  target='_blank'
                  className='link-gradient mx-1'
                  href={'http://fav.me/ddhazrl'}>
                  Service Review
               </Link>
               to see the comments left by some clients.
            </React.Fragment>
         ),
      },
      {
         type: 'microtitle',
         content: 'Postponed projects',
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               The client can request to <b className='mx-1'>postpone a project for one month.</b> If the client restarts the project within the set
               time they won&apos;t require paying the advance payment again.
            </React.Fragment>
         ),
      },
      {
         type: 'microtitle',
         content: 'Intellectual Property Rights',
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               This is a professional service. All designs are protected under the
               <b className='mx-1'>Digital Millennium Copyright Act, the Creative Commons, and the Intelectual Property Rights</b> of each country
               where these designs are registered by their rightful owners. If you try to use one of these designs without permission you may be
               subject to legal actions.
            </React.Fragment>
         ),
      },
      {
         type: 'microtitle',
         content: 'What happens in the case of Multiple Discovery?',
      },
      {
         type: 'paragraph',
         content: (
            <React.Fragment>
               In the case of a <b className='mx-1'>Multiple Discovery</b> (When inventions are made independently by multiple people), the client can
               request a new design but only if it&apos;s <b className='mx-1'>within 2 months after finishing the commission.</b>
            </React.Fragment>
         ),
      },
      {
         type: 'list',
         title: 'TERMS AND CONDITIONS OF THE SERVICE',
         items: [
            'The client agrees to cover the full fee to start the project.',
            'The client is responsible for all resources they provide to be used on their project. The designer is not liable in case those resources are stolen or have limited commercial rights.',
            "The designer can't keep nor share any of the resources provided by the client to be used on their project.",
            "The client can't keep nor share any design approaches with other designers or artists to replicate or modify.",
            'Once the client receives the final files (.ai, .eps, .psd, and other requested formats), the client accepts he/she/they are satisfied with the design provided and the price established.',
            'There are no refunds once the first design approach is sent.',
            'The client can request minor changes to the design any time he/she/they desire.',
            'The client can request new files anytime he/she/they desire.',
            'The client has full commercial ownership of the design with all the rights it entails.',
            "The designer keeps the author's moral rights to promote and display the work as made by him.",
            "The client can't promote himself/herself/themselves as the creators of the design.",
            'All unused design approaches belong to the designer.',
            "The designer can re-use, recycle, modify, share or sell any unused design approaches that aren't variants of the chosen design.",
            "The client can redesign, modify or alter the design in any way he/she wants. The designer will only keep the author's rights over the original design.",
         ],
      },
   ],
   Commonly_asked_questions: [
      {
         type: 'title',
         content: 'Commony asked questions',
      },
      {
         type: 'microtitle',
         content: 'Can I use the logo I commissioned on other websites?',
      },
      {
         type: 'paragraph',
         content:
            'Absolutely yes. You can use the logo however you want. The logo is an identity and as an identity, you can use it in any way you feel is right to identify yourself.',
      },
      {
         type: 'microtitle',
         content: 'Can I commercialize the design?',
      },
      {
         type: 'paragraph',
         content:
            "Yes. All commercial rights belong to you the moment you pay me. That's why I send the original editable files. While you commercialize the design, you can't promote yourself as the creator of the design.",
      },
      {
         type: 'microtitle',
         content: 'Can I resell the design?',
      },
      {
         type: 'paragraph',
         content:
            "Yes. As mentioned before you own all commercial rights, including selling the identity. But keep in mind that you can't violate my author's moral rights, which means you can't promote yourself as the author of the design neither the new buyer, nor you can agree with a third party to pull down all images containing the design, including those on my portfolios.",
      },
      {
         type: 'microtitle',
         content: `Can I purchase the author's moral rights?`,
      },
      {
         type: 'paragraph',
         content:
            "No, but you can request the Vault Service so the design won't be displayed in my portfolios. Still, this doesn't mean that you can claim you made the design but you don't have to tell others I did it.   ",
      },
   ],
}
