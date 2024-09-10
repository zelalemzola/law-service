import { Menu, ReceiptText, Search } from 'lucide-react';
import Link from 'next/link';
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
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className=''>
      <div className='fixed w-full py-1 px-10 md:px-20 flex items-center justify-between bg-white z-30 rounded-b-xl'>
            <h1 className='text-3xl text-primary font-bold'>Sina Law</h1>
            <div className='hidden md:flex items-center gap-10'>
                <Link href='/' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Home</Link>
                <Link href='/services' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Services</Link>
                <Link href='/about' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>About</Link>
                <Link href='/contact' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Contact Us</Link>
                <Link href='/workers' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out flex items-center gap-2'><Search />Gig Workers</Link>
            </div>
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
        </div>

        <div className='w-full py-[15%] md:py-[10%] px-[2%]'>
          <div className='flex flex-col gap-5 '>
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl'>Mediation</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.</p>
            <div className='relative'>
            <Drawer>
                 <DrawerTrigger className=' flex items-center gap-3 bg-secondary hover:bg-primary transition duration-700 ease-in-out p-2 w-fit rounded-xl  text-white py-2 px-6'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                      Mediation
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                    As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
                  </p>
                    </div>
                   <DrawerFooter>
                     
                     <DrawerClose>
                       <Button variant="destructive">Close</Button>
                     </DrawerClose>
                   </DrawerFooter>
                 </DrawerContent>
               </Drawer>
               </div>
               </div>
               <hr className='w-full border-2'/>
            <div className='flex flex-col gap-3 items-center '>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl'>Family Case</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.</p>
            <div className=''>
            <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-secondary hover:bg-primary transition duration-700 ease-in-out p-2 w-fit rounded-xl  text-white py-2 px-6'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                      Family Case
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                    As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
                  </p>
                    </div>
                   <DrawerFooter>
                     
                     <DrawerClose>
                       <Button variant="destructive">Close</Button>
                     </DrawerClose>
                   </DrawerFooter>
                 </DrawerContent>
               </Drawer>
               </div>
               </div>
                <hr className='w-full border-2'/>
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl'>Succession</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.</p>
            <div className=''>
            <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-secondary hover:bg-primary transition duration-700 ease-in-out p-2 w-fit rounded-xl  text-white py-2 px-6'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                      Succesion
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                    As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
                  </p>
                    </div>
                   <DrawerFooter>
                     
                     <DrawerClose>
                       <Button variant="destructive">Close</Button>
                     </DrawerClose>
                   </DrawerFooter>
                 </DrawerContent>
               </Drawer>
               </div>
               </div>
                <hr className='w-full border-2'/>
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl'>Tax</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.</p>
            <div className=''>
            <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-secondary hover:bg-primary transition duration-700 ease-in-out p-2 w-fit rounded-xl  text-white py-2 px-6'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                      Tax
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                    As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
                  </p>
                    </div>
                   <DrawerFooter>
                     
                     <DrawerClose>
                       <Button variant="destructive">Close</Button>
                     </DrawerClose>
                   </DrawerFooter>
                 </DrawerContent>
               </Drawer>
               </div>
               </div>
                <hr className='w-full border-2'/>
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl'>Employment Law</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.</p>
            <div className=''>
            <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-secondary hover:bg-primary transition duration-700 ease-in-out p-2 w-fit rounded-xl  text-white py-2 px-6'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                      Employement Law
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                    As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
                  </p>
                    </div>
                   <DrawerFooter>
                     
                     <DrawerClose>
                       <Button variant="destructive">Close</Button>
                     </DrawerClose>
                   </DrawerFooter>
                 </DrawerContent>
               </Drawer>
               </div>
               </div>
                <hr className='w-full border-2'/>
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl'>Employment Law</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.</p>
            <div className=''>
            <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-secondary hover:bg-primary transition duration-700 ease-in-out p-2 w-fit rounded-xl  text-white py-2 px-6'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                     Pro Bono
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                    As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
                  </p>
                    </div>
                   <DrawerFooter>
                     
                     <DrawerClose>
                       <Button variant="destructive">Close</Button>
                     </DrawerClose>
                   </DrawerFooter>
                 </DrawerContent>
               </Drawer>
               </div>
               </div>
                <hr className='w-full border-2'/>
            <div className='flex flex-col gap-3 items-center'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl'>Contract</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.</p>
            <div className=''>
            <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-secondary hover:bg-primary transition duration-700 ease-in-out p-2 w-fit rounded-xl  text-white py-2 px-6'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                       Contract
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                    As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
                  </p>
                    </div>
                   <DrawerFooter>
                     
                     <DrawerClose>
                       <Button variant="destructive">Close</Button>
                     </DrawerClose>
                   </DrawerFooter>
                 </DrawerContent>
               </Drawer>
               </div>
               </div>
          </div>
        </div>
    </div>
  )
}

export default Services