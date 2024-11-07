'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
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
import Image from 'next/image';
const BlogDetails = () => {
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
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null); // To handle errors
  const params = useParams(); // Get the parameters from the URL
  const { id } = params; // Extract the blog ID from params

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/blogs/${id}`);
          setBlog(response.data.blog); // Update state with fetched blog
        } catch (error) {
          setError('Error fetching blog'); // Handle error
          console.error("Error fetching blog:", error);
        }
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <div>{error}</div>; // Show error if any
  if (!blog) return <div className='flex items-center justify-center h-screen text-lg text-primary'>Loading...</div>; // Loading state

  return (
    <div className='pb-10'>
       <div className='fixed w-full py-1 px-10 md:px-20 flex items-center justify-between bg-white z-30 rounded-b-xl shadow-xl'>
       <Link href='/'><Image src='/sinalogo.png' alt='logo' width={150} height={80}/></Link>
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
            <div className='py-[20%] md:py-[5%]'>
      <img src={blog.thumbnailUrl} alt={blog.title} className="w-full h-[40vh] object-cover" />
      <h1 className=" mt-4 capitalize text-center text-primary font-bold text-3xl md:text-4xl">{blog.title}</h1>
      <div className='px-5 flex flex-col gap-4'>
      <p className="mt-2 text-gray-400"><span className='text-primary text-lg font-semibold'>Date: </span> {new Date(blog.date).toLocaleDateString()}</p>
      <div className="mt-4 ">{blog.content}</div>
      </div>
      </div>
    </div>
  );
};

export default BlogDetails;



