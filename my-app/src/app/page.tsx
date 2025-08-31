"use client";

import { SignIn, SignUp } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'




import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';


const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];



const HomePage = () => {

  const [openSheet, setOpenSheet] = useState(false)

  const searchParams = useSearchParams()
  const formType = searchParams.get('formType')

  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex justify-between items-center bg-gray-100 px-20 py-5">
         <h1 className="font-bold text-3xl text-primary">
            BuildUp
        </h1>

        <div className="flex justify-end gap-5 items-center">
          {
           menuItems.map((item) => (
            <span key={item.title} className="text-sm font-bold text-gray-600">
               {item.title}
            </span>
           )) 
          }

          <Button onClick={() => setOpenSheet(true)}>Sign-In</Button>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-10 mt-10 h-[70vh] px-20">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-4xl font-bold text-primary">
              <b className="text-[#FE4E59]">PORTFOLIO</b>-BUILDER
            </h1>
             <p className="text-gray-600 mt-2 text-sm font-semibold">
               BuildUp is a platform that allows you to create
               your own portfolio in minutes. It is easy to use and has a lot of
               features. You can create your own portfolio in minutes. You can
               add your own projects, skills, and experience.
             </p>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-126.jpg"
            alt="hero"/>
        </div>
      </div>

    {
      openSheet && (
        <Sheet
         open={openSheet}
         onOpenChange={setOpenSheet}>
          <SheetContent className="min-w-[500px] flex justify-center items-center">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>

            {
              formType === 'sign-in' ? (
                <SignIn
                  routing="hash"
                  signUpUrl="/?formType=sign-up"
                  fallbackRedirectUrl="/account"/>
              ): (
                <SignUp
                   routing="hash"
                   signInUrl="/?formType=sign-in"
                   fallbackRedirectUrl="/account"/>
              )
            }
          </SheetContent>
        </Sheet>
      )
    }
    


    </div>
  )
}

export default HomePage