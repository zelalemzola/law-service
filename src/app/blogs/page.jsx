"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
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
const Blogs = () => {
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
  const [blogs, setBlogs] = useState([]);
   
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get('/api/blogs');
      // Sort blogs by date, newest first
      const sortedBlogs = response.data.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
      setBlogs(sortedBlogs);
    };

    fetchBlogs();
  }, []);
  if (!blogs) return <div className='flex items-center justify-center h-screen text-lg text-primary'>Loading...</div>;
  return (
    <div className=''>
       <div className='fixed w-full py-1 px-10 md:px-20 flex items-center justify-between bg-white z-30 rounded-b-xl shadow-xl'>
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
      <h1 className="text-primary text-3xl md:text-4xl font-extrabold text-center py-[20%] md:py-[5%]">Latest Blog Posts</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-10 md:space-y-10 p-4">
      {blogs.map((blog) => (
        <Link key={blog._id} href={`/blogs/${blog._id}`} className="relative group">
          <img src={blog.thumbnailUrl} alt={blog.title} className="w-full h-64 object-cover rounded-md" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 transform translate-y-0 group-hover:translate-y-full group-hover:bg-primary group-hover:text-white group-hover:rounded-b-xl transition-transform duration-300">
            <h2 className="text-white font-bold">{blog.title}</h2>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Blogs;
