
import { Button } from '@/components/ui/button';
import { Drawer,DrawerHeader,DrawerTitle, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer';
import { Menu, Search,ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
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
const AboutPage = () => {
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
    
    <>
    
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
                <Link href='/blogs' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Blogs</Link>
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
                <Link href='/blogs' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out'>Blogs</Link>
                <Link href='/workers' className='text-primary hover:underline hover:decoration-secondary duration-800 hover:decoration-3 text-xl hover:font-bold transition ease-in-out flex items-center gap-2'><Search />Gig Workers</Link>
             
             </div>
            </div>
         <div className='w-full md:h-screen py-[20%] md:py-[10%] px-[10%] flex gap-20'>
         <div className='md:w-[60%] flex flex-col items-center justify-center gap-6'>
          <h1 className='text-primary text-4xl md:text-6xl'>About <span className='text-secondary'>Our Firm</span></h1>
          <p className='text-lg text-center'>We work closely with our clients throughout every stage of what is usually a long and tough ordeal so that they can accomplish their goals and desires. With our combined experience of handling complex trials and litigations for over 30 years, you can trust us to be forthright and diligent in meeting your needs.</p>
         
         </div>
         <div className='hidden md:flex items-center justify-center'>
          <Image src='/lawabout.png' alt='about image' width={900} height={900} className='h-[100%] w-[100%] scale-[120%]' />
         </div>
        </div>
        <div className='md:h-screen w-full py-[5%] px-[2%]'>
          <h1 className='text-5xl text-center text-primary font-bold'>Gig Workers Based Approach</h1>
          <div className='mt-[5%] flex flex-row flex-wrap gap-10 items-center'>
            <div className='md:w-[31%] p-3 py-6 bg-primary text-white flex flex-col gap-4 items-center rounded-xl shadow-xl'>
              <h1 className='text-2xl text-secondary font-bold'>We Train and Certify</h1>
              <p className='text-lg'>
                We train and certify law graduated in mediation, substantive law principles, how to  deferences civil and criminal case, how to advise client in civil and criminal issue
              </p>
            </div>
            <div className='md:w-[31%] p-3 py-6 bg-primary text-white flex flex-col gap-4 items-center rounded-xl shadow-xl'>
              <h1 className='text-2xl text-secondary font-bold'>Provide gig workers</h1>
              <p className='text-lg'>
                We train and certify law graduated in mediation, substantive law principles, how to  deferences civil and criminal case, how to advise client in civil and criminal issue
              </p>
            </div>
            <div className='md:w-[31%] p-4 py-6 bg-primary text-white flex flex-col gap-4 items-center rounded-xl shadow-xl'>
              <h1 className='text-2xl text-secondary font-bold'>Tailored Solutions </h1>
              <p className='text-lg'>
                We train and certify law graduated in mediation, substantive law principles, how to  deferences civil and criminal case, how to advise client in civil and criminal issue
              </p>
            </div>
           
          </div>
          <Link href='/workers' className=' my-[5%] rounded-lg py-3 px-6 bg-primary shadow-md hover:shadow-2xl hover:bg-secondary hover:scale-[90%] transition duration-700 ease-in-out flex items-center gap-3 w-fit text-white text-lg mx-auto'><Search/> Gig Workers</Link>

        </div>
      </>
  )
}

export default AboutPage