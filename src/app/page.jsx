import Link from 'next/link'
import Image from 'next/image'
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
import { ArrowRight, Facebook, Instagram, Linkedin, Menu, ReceiptText, Search, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GradualSpacing from '@/components/magicui/gradual-spacing'
import BlurIn from '@/components/magicui/blur-in'
import { inView } from 'framer-motion'
import BlurFade from '@/components/magicui/blur-fade'
import { FadeText } from '@/components/magicui/fade-text'
const HomePage = () => {
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
        <div className='w-full h-screen landing pt-[15%] px-[5%] md:px-[10%] '>
          <GradualSpacing
             className="hidden text-start md:block md:text-5xl font-display  font-bold tracking-[-0.1em] -ml-[40%]   md:leading-[5rem]"
             text={`Solving your problems head-on`}
             
           />
          <GradualSpacing
             className="text-2xl md:hidden mt-[30%] text-center font-bold   font-display   tracking-[-0.1em]   md:leading-[5rem]"
             text={`Solving your problems head-on`}
           />
          <BlurIn
          duration={0.50}
      word="We provide you with direct and expert legal care so that you can resolve issues early and amicably."
      className="text-xl md:w-[50%] my-6"
    />
         {/* <p className='text-xl md:w-[50%] my-6'>We provide you with direct and expert legal care so that you can resolve issues early and amicably.</p> */}
         <Link href='/contact' className='bg-primary py-3 px-6 rounded-xl shadow-md hover:shadow-2xl hover:bg-secondary text-white text-lg transition duration-700 ease-in-out '>Contact Us</Link>
        </div>
        <div className='w-full md:h-screen py-[10%] px-[10%] flex gap-20'>
         <div className='md:w-[60%] flex flex-col items-center justify-center gap-6'>
          <h1 className='text-primary text-4xl md:text-6xl'>About <span className='text-secondary'>Our Firm</span></h1>
          
          <BlurFade delay={0.35} inView='true'>
            <p className='text-lg text-center'>Sina  law firm is  established with the aim of serving clients needs. It majorly provides a quality legal advisory mediation and litigation service. Besed in Ethiopia. It established by prominent lawyer who served various corporate clients for over a decades.</p>
          </BlurFade>

          
          <Link href='/about' className='text-white bg-primary text-lg py-2 px-6 rounded-xl flex items-center gap-2 shadow-md hover:shadow-2xl hover:gap-4'>Learn More  <ArrowRight /></Link>
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

        
        <div className='w-full md:h-screen py-[5%] md:py-[2%] px-[2%] flex flex-col md:flex-row gap-6 bg-[#4d4d4d]'>
          <div className="md:w-[20%] flex flex-col items-center justify-center gap-10">
            <FadeText
        className="text-4xl text-white text-center"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },

        }}
        text="What We Focus On"
      />
           
            <Link href='/services' className='text-white py-4 px-8 rounded-xl shadow-xl bg-primary'>Services</Link>
          </div>

          <div className=' md:w-[80%] flex fle-col md:flex-row flex-wrap items-center justify-center gap-6'>
                          
            <BlurFade delay={0.25} inView='true'className='md:w-[35%] bg-primary p-3 flex flex-col gap-3 rounded-xl'>
            <div >
              <h1 className='text-2xl text-white font-bold'>Mediation</h1>
              <p className='text-white '>
                 As a neutral third party we assist you in reaching a mutually acceptable resolution. focus on collaboration and communication allowing parties to express thier concern and interests.
              </p>
               <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-white p-2 w-fit rounded-xl mx-auto'>Breif Detial <ReceiptText /></DrawerTrigger>
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
           </BlurFade>
            <BlurFade delay={0.30} inView='true'className='md:w-[35%] bg-primary p-3 flex flex-col gap-3 rounded-xl'>
            <div >
              <h1 className='text-2xl text-white font-bold'>Contract</h1>

              <p className='text-white '>
                We prepare an agreement  and advice you about how to establish your company legaly  and  represent you as a legal attorney in court room <br/>.......
              </p>
               <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-white p-2 w-fit rounded-xl mx-auto'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                      Contract
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                   We prepare an agreement  and advice you about how to establish your company legaly  and  represent you as a legal attorney in court room.
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
            </BlurFade>
             <BlurFade delay={0.35} inView='true'className='md:w-[35%] bg-primary p-3 flex flex-col gap-3 rounded-xl'>
            <div >
              <h1 className='text-2xl text-white font-bold'>Commercial Law</h1>
              <p className='text-white '>
                 You gain a dedicated advocate who is commited to your success equipped with the expertise. And resources necessary to navigate the complexities of commercial legal matters effectively...
              </p>
               <Drawer>
                 <DrawerTrigger className='flex items-center gap-3 bg-white p-2 w-fit rounded-xl mx-auto'>Breif Detial <ReceiptText /></DrawerTrigger>
                 <DrawerContent>
                   <DrawerHeader>
                     <DrawerTitle className='text-center text-5xl font-bold'>
                      Commercial Law
                     </DrawerTitle>
                   </DrawerHeader>
                   <div className='w-[70%] mx-auto'>
                   <p className='text-black text-xl'>
                   You gain a dedicated advocate who is commited to your success equipped with the expertise. And resources necessary to navigate the complexities of commercial legal matters effectively
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
            </BlurFade>
             <BlurFade delay={0.40} inView='true'className='w-[35%] bg-primary p-3 hidden md:flex flex-col gap-3 rounded-xl lawfocus h-[45%]'>
            <div >
            
            </div>
            </BlurFade>
            
          </div>
        </div>
        <div className='w-full  py-[3%] px-[3%]'>
          <div className='w-full text-center my-[5%]'>
           <FadeText
        className='text-5xl text-center text-primary font-bold '
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.21 } },
        }}
        text="Our Main Services"
      />
         </div>
          <div className="flex items-center justify-center flex-row flex-wrap gap-10">
              <BlurFade delay={0.23} inView='true'>
                <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Mediation</div>
              </BlurFade>
              <BlurFade delay={0.26} inView='true'>
              <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Family Law</div>
            </BlurFade>
              <BlurFade delay={0.29} inView='true'>
            <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Employment Law</div>
            </BlurFade>
              <BlurFade delay={0.32} inView='true'>
             <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Commercial Law</div>
            </BlurFade>
            <BlurFade delay={0.35} inView='true'>
            <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Succession</div>
            </BlurFade>
              <BlurFade delay={0.38} inView='true'>
            <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Tax</div>
            </BlurFade>
              <BlurFade delay={0.41} inView='true'>
            <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Contract</div>
            </BlurFade>
              <BlurFade delay={0.44} inView='true'>
            <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Criminal Law</div>
            </BlurFade>
              <BlurFade delay={0.47} inView='true'>
            <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'> Pro bono</div>
            </BlurFade>
              <BlurFade delay={0.50} inView='true'>
            <div className='bg-primary text-white px-6 py-3 text-lg rounded-xl'>Substantive legal training and research</div>
            </BlurFade>
          </div>
          <Link  href='/services' className='mx-auto px-6 py-3 text-lg flex items-center gap-3 bg-primary w-fit text-white rounded-xl my-[3%] hover:bg-secondary transition duration-700 ease-in-out'>Learn More<ArrowRight/></Link>
        </div>
        <div className='w-full md:h-screen py-[10%] md:py-[3%] px-[3%] bg-primary flex flex-col gap-10 md:gap-0 md:flex-row'>
         <div className='md:w-[50%] flex items-center md:items-start justify-center gap-8 flex-col'>
                  <FadeText
              className='text-white text-3xl font-bold'
              direction="left"
              framerProps={{
                show: { transition: { delay: 0.4 } },
              }}
              text="Let's Talk"
            />
              <BlurFade delay={0.44} inView='true' className='bg-white p-2 w-[80%] text-black text-center rounded-2xl '>
            <p >Addis Ababa, Bole Atlas</p>
            </BlurFade>
              <BlurFade delay={0.48} inView='true' className='bg-white p-2 w-[80%] text-black text-center rounded-2xl '>
            <p >0943902245</p>
            </BlurFade>
              <BlurFade delay={0.52} inView='true' className='bg-white p-2 w-[80%] text-black text-center rounded-2xl '>
            <p >abrillawfirm@gmail.com</p>
            </BlurFade>
            <BlurFade delay={0.62} inView='true'>
            <Link href='/contact' className='bg-secondary p-3 w-fit text-white shadow-md  hover:shadow-2xl rounded-2xl text-center flex items-center gap-3 hover:bg-white hover:text-black transition duration-700 ease-in-out'>Contact Us<ArrowRight/></Link>
            </BlurFade>
         </div>
         <div className='md:w-[50%] flex items-center md:items-start justify-center flex-col gap-10 '>
             <FadeText
            className='text-white text-3xl font-bold'
              direction="right"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              text=" Business Hours"
            />
               <BlurFade delay={0.63} inView='true'className='bg-white p-5 text-black flex flex-col items-start gap-5 rounded-xl w-[70%] text-center shadow-2xl'>
          
              <p className='text-lg '>Monday to Friday</p>
              <p className='text-lg '>2:30 - 11:30LT</p>
              <p className='text-lg '>Saturday</p>
              <p className='text-lg '>2:30 - 5:30LT</p>
              <p className='text-lg '>We work on sundays for clients who only have appointments</p>
           
             </BlurFade>
         </div>
        </div>
        <div className='w-full py-[5%] px-[5%]'>
          <h1 className='text-primary text-5xl font-bold mb-[2%]'>Sina Law</h1>
          <hr className='w-full border-primary border-1 mb-[10%] md:mb-[5%]'/>
          <h1 className='text-primary text-4xl font-bold'>Meet Our Gig Workers</h1>
          <div className='flex flex-col md:flex-row items-center justify-between my-[2%] gap-5 md:gap-0'>
          <p className='text-lg md:w-[60%]'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.</p>
          <Link href='/workers' className='bg-primary py-3 px-6 rounded-xl flex items-center gap-3 text-white'><Search/> Gig Workers</Link>
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

export default HomePage