import { ArrowRight, Facebook, Instagram, Linkedin, Menu, ReceiptText, Search, Twitter } from 'lucide-react';
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
const ContactPage = () => {
      const services = [
  {
    title: "Mediation",
    href: "/services#mediation",
   
  },
  {
    title: "Family Case",
    href: "/services#family",
  
  },
  {
    title: "Succession",
    href: "/services#succession",
   
  },
  {
    title: "Tax",
    href: "/services#tax",

  },
  {
    title: "Employment Law",
    href: "/services#employment",

  },
  {
    title: "Contract",
    href: "/services#contract",
   
  },
  {
    title: "View All",
    href: "/services",
   
  },
]
  return (
    <div>
          <div className='fixed w-full py-1 px-10 md:px-20 flex items-center justify-between bg-white z-30 rounded-b-xl'>
            <h1 className='text-3xl text-primary font-bold'>Sina Law</h1>
            <div className='flex md:hidden'>
                            <Drawer>
                <DrawerTrigger>
                   <Menu className='scale-[150%] text-primary'/>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className='text-3xl text-primary font-bold text-center'>
                       Sina Law
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className='flex flex-col items-center gap-5'>
                <Link href='/' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Home</Link>
                <Link href='/services' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Services</Link>
                <Link href='/about' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>About</Link>
                <Link href='/contact' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Contact Us</Link>
                <Link href='/workers' className='bg-primary text-white p-2 rounded-xl  text-xl hover:font-bold transition ease-in-out flex items-center gap-2'><Search />Gig Workers</Link>
                 </div>
                  <DrawerFooter>
                    <DrawerClose>
                      <Button variant="destructive">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <div className='hidden md:flex items-center gap-10'>
                <Link href='/' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Home</Link>
                 <NavigationMenu>
                  <NavigationMenuList >
                     <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            <p className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Services</p>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {services.map((component) => (
                                <div
                                  key={component.title}
                                  
                                  className='p-2 border-1 shadow-lg flex flex-col gap-2'
                                  
                                >
                                  <h1 className='text-xl text-primary font-bold'>{component.title}</h1>
                                 
                                  <Link href={component.href} className='flex items-center gap-2 bg-primary text-white w-fit p-2 rounded-xl'>View Detail<ArrowRight/></Link>
                                </div>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Link href='/about' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>About</Link>
                <Link href='/contact' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Contact Us</Link>
                <Link href='/workers' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out flex items-center gap-2'><Search />Gig Workers</Link>
             
             </div>
            </div>
         <div className='w-full md:h-screen py-[20%] md:py-[10%] px-[3%] bg-primary flex flex-col gap-10 md:gap-0 md:flex-row'>
         <div className='md:w-[50%] flex items-center md:items-start justify-center gap-8 flex-col'>
            <h1 className='text-white text-3xl font-bold'>Let's Talk</h1>
            <p className='bg-white p-2 w-[80%] text-black text-center rounded-2xl '>Addis Ababa, Bole Atlas</p>
            <p className='bg-white p-2 w-[80%] text-black text-center rounded-2xl '>0943902245</p>
            <p className='bg-white p-2 w-[80%] text-black text-center rounded-2xl '>abrillawfirm@gmail.com</p>
          
         </div>
         <div className='md:w-[50%] flex items-center md:items-start justify-center flex-col gap-10 '>
             <h1 className='text-white text-3xl font-bold'>Business Hours</h1>
             <div className='bg-white p-5 text-black flex flex-col items-start gap-5 rounded-xl w-[70%] text-center shadow-2xl'>
              <p className='text-lg '>Monday to Friday</p>
              <p className='text-lg '>2:30 - 11:30LT</p>
              <p className='text-lg '>Saturday</p>
              <p className='text-lg '>2:30 - 5:30LT</p>
              <p className='text-lg '>We work on sundays for clients who only have appointments</p>
              
             </div>
         </div>
        </div>
        <div className='w-full py-[5%] px-[5%]'>
          <h1 className='text-primary text-5xl font-bold mb-[2%] md:mb-[5%]'>Sina Law</h1>
             <hr className='w-full border-primary border-1 mb-[10%] md:mb-[5%]'/>
          <h1 className='text-primary text-4xl font-bold'>Meet Our Gig Workers</h1>
          <div className='flex flex-col md:flex-row items-center justify-between my-[2%] gap-5 md:gap-0'>
          <p className='text-lg md:w-[60%]'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.</p>
          <Link href='/' className='bg-primary py-3 px-6 rounded-xl flex items-center gap-3 text-white'><Search/> Gig Workers</Link>
          </div>
             <hr className='w-full border-primary border-1 mb-[10%] md:mb-[5%]'/>
          <h1 className='text-primary text-4xl font-bold my-[5%]'>Contact Us</h1>
          <div className='flex items-center text-2xl  gap-20 flex-wrap my-[2%] px-[1%]'>
            <Instagram className='text-lg text-white bg-primary p-1  font-bold scale-[200%]' />
            <Facebook  className='text-lg text-white bg-primary p-1   font-bold scale-[200%]' />
            <Twitter   className='text-lg text-white bg-primary p-1   font-bold scale-[200%]' />
            <Linkedin  className='text-lg text-white bg-primary p-1  font-bold scale-[200%]' />

          </div>
        </div>
      

    </div>
  )
}

export default ContactPage