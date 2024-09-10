import { Menu, ReceiptText, Search,ArrowRight } from 'lucide-react';
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

const Services = () => {
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
    <div className=''>
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
        <div className='w-full py-[15%] md:py-[10%] px-[2%]'>
          <div className='flex flex-col gap-5 '>
            <div className=' flex flex-col gap-3 items-center' id='mediation'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl mt-[5%]'>Mediation</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.

              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae quos at architecto deleniti ipsum tenetur accusantium aspernatur hic assumenda laborum nobis libero veniam perspiciatis minima, voluptatem, sit voluptatibus. Sequi ipsum possimus magnam odio? Asperiores numquam earum id adipisci amet placeat et, aut natus dolore modi maxime dicta culpa temporibus optio! Asperiores, quam cumque molestiae ab itaque, nemo voluptatum illum aliquid beatae commodi veniam! Autem fuga iure perspiciatis dignissimos, ad iusto nihil atque necessitatibus nisi incidunt eaque modi quasi quidem enim facilis rerum explicabo consequatur voluptas maiores laborum soluta ipsam! Iure saepe voluptatum obcaecati, atque labore accusamus nostrum eius quos veritatis laboriosam illo iusto ipsum quo quidem dicta. Est eius repudiandae vitae omnis amet cupiditate quo voluptas vero quod aut. Ab in voluptates impedit magni molestiae? Eos, impedit quo, dolorem tenetur pariatur culpa nesciunt vel, doloremque autem illo molestias iusto! Porro, repellendus qui ullam facilis sed quod et consequatur, magni odio eligendi ipsa obcaecati dignissimos ipsam deserunt laudantium nesciunt. Cum, quo aperiam deserunt consequatur delectus amet perspiciatis. Repudiandae amet, qui at voluptate vero itaque facilis dicta eaque magnam? Et, non repellendus. Inventore, voluptatibus! Totam, aspernatur, possimus repellat suscipit, doloribus omnis quod quia optio dolorum voluptas a. Earum voluptatibus commodi consequuntur?
            </p>
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
            <div className='flex flex-col gap-3 items-center ' id='family'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl mt-[5%]'>Family Case</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut dolorum veniam! Ratione culpa, omnis laborum exercitationem perspiciatis repellat quis sint praesentium architecto! Possimus dolores beatae voluptatum, eveniet exercitationem facere accusamus, porro iusto vitae nisi inventore dolorum minus, consectetur rerum enim eos reprehenderit velit similique ex! A minus quos culpa natus modi, earum et consequuntur deserunt quibusdam officiis officia odio facilis aperiam numquam voluptatibus repudiandae dolorem velit tempora dolorum similique perferendis. At, ea quas, labore doloremque asperiores et iste, commodi tempore reprehenderit ipsa autem ipsum? Facilis autem amet, ad libero eos quasi? Aut consectetur nam amet pariatur harum illum! Recusandae consequatur magni excepturi qui quaerat voluptas amet nobis facilis, porro molestias odio et exercitationem debitis culpa deleniti laboriosam nisi quibusdam quae atque quia illum maxime explicabo nulla. Dicta, voluptas! Itaque nemo et, excepturi error qui, ipsa tempora modi quas nulla in exercitationem molestiae nostrum, consequuntur ad repellendus repudiandae. Excepturi laborum ullam magni culpa. Harum quo totam commodi hic dolorum possimus voluptatem autem ut id similique, qui delectus blanditiis quia ipsum alias numquam aliquid consectetur deleniti animi accusamus aperiam, beatae vitae! Hic tenetur error tempora at optio odit, consequatur assumenda totam rerum doloremque accusamus molestias reiciendis temporibus consequuntur culpa laboriosam ipsa! Expedita aut molestias reprehenderit officiis nobis corrupti eveniet esse consequuntur maiores rem, porro dolorem saepe beatae natus minus debitis veritatis quaerat atque voluptas earum! Ipsa est nulla rem reprehenderit, unde earum molestiae amet architecto nemo vitae, aperiam provident. Molestias quos delectus ipsum, exercitationem unde illo, quisquam ea temporibus nihil suscipit consequuntur magni? Quas ratione recusandae voluptatum iure obcaecati perspiciatis corporis laboriosam molestias saepe, non officia debitis et amet maxime a libero ex officiis voluptatibus sint eligendi provident sit! Tempora quibusdam obcaecati ratione facere, fugit repellendus illo iste cumque nihil ducimus tenetur magnam facilis accusamus quos molestiae ea laborum voluptatum. Dolorum.
            </p>
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
            <div className='flex flex-col gap-3 items-center' id='succession'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl mt-[5%]'>Succession</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sequi! Accusamus possimus veritatis totam nam ducimus deleniti perferendis tenetur dicta? Perspiciatis voluptas, esse quam accusamus ipsa, odit quisquam laborum tempora, mollitia facere temporibus odio nihil laudantium repellendus voluptate a ipsam! Aliquid, rem. Accusantium laborum libero beatae, numquam soluta odit. Mollitia odit blanditiis deserunt similique eveniet cumque ipsam quasi saepe assumenda totam architecto quam beatae tenetur, magnam dolores quos laboriosam sed voluptas corporis sequi! Sapiente, ratione nemo. Ea ullam vel, architecto non harum suscipit nisi fugiat. Maiores, nobis eaque magnam laudantium iusto aperiam provident eveniet! Inventore ipsa corrupti aliquam, explicabo nemo, quia nisi fugiat repudiandae quidem maxime necessitatibus eum magni unde quos. Possimus cum, quasi fugit eos similique aut sunt. Quia alias doloribus aperiam, magnam iusto voluptatibus repellat quae porro sint totam quam nobis tempore laudantium debitis. Culpa odit reiciendis dolor laboriosam numquam laudantium, aliquid itaque mollitia minima quod officia sequi vero tempora veritatis exercitationem molestias placeat quasi necessitatibus eum vitae autem! Doloremque ex rerum adipisci veniam quo explicabo consectetur reprehenderit aperiam veritatis obcaecati impedit et possimus accusantium provident, dignissimos ratione non fugiat! Laudantium, rem quidem quas, molestiae laboriosam quibusdam ullam quo aut architecto similique repellat! Dolorem fugiat eum eos porro fugit repellendus atque assumenda, nostrum ipsa ad quisquam in itaque, quo doloribus voluptate architecto ullam rerum non sapiente blanditiis, magni necessitatibus? Necessitatibus, libero autem, consequuntur sequi consectetur dolore mollitia, fuga dolorem temporibus beatae vitae deleniti nesciunt debitis animi dignissimos distinctio. Magni cum tempora dolores! Quaerat sunt odio impedit repellat ut error esse numquam, voluptate dolorum, nemo dolore est culpa temporibus eius totam? Ducimus, ipsa quam! Enim perferendis, dolores iusto ipsam amet maiores, id deleniti nulla aut et laudantium. Perspiciatis facere ab accusantium atque recusandae totam voluptates illum perferendis. Fuga officia dignissimos doloremque repellat minus perferendis itaque ut, dicta maxime a!
            </p>
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
            <div className='flex flex-col gap-3 items-center' id='tax'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl mt-[5%]'>Tax</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto similique debitis voluptatibus magnam quasi possimus commodi explicabo cum dolore tempora cupiditate at eligendi labore reprehenderit doloremque accusamus exercitationem placeat dolores vitae, iusto error. Iste officiis soluta dignissimos consequatur ad error sed labore provident quasi deleniti architecto eius, laborum rerum reiciendis voluptate perspiciatis commodi molestias assumenda repudiandae? Ab debitis dolor, incidunt voluptate pariatur adipisci quo ducimus totam distinctio minima nesciunt illum esse eveniet fugiat iste quasi. Reiciendis, sunt facere! Rerum consequatur provident deserunt commodi pariatur, voluptate eius error iste vero ut aspernatur, neque, aut reprehenderit earum numquam! Quis, nihil modi cupiditate commodi hic sunt ullam pariatur velit explicabo iusto nemo consequatur exercitationem. Odit assumenda fugiat molestias modi reprehenderit delectus fuga nesciunt, sunt maxime natus corrupti quasi provident sint, odio necessitatibus optio perspiciatis, et inventore? Repellendus velit laboriosam, sapiente beatae architecto recusandae tenetur quidem, temporibus, illum ullam amet dolorem odit incidunt aspernatur omnis consequuntur quam sunt dolores vitae aperiam adipisci. Repellat fugit quas quasi modi maiores. Distinctio cupiditate molestias dolorem itaque vitae? Corrupti at doloribus, perferendis sunt laborum ex, enim aperiam aliquam in perspiciatis praesentium hic laudantium aliquid eum nihil sint facilis culpa consequatur natus eius nam animi facere veniam. Eos tempora nam praesentium laudantium at minima dicta dolorem soluta porro, provident reiciendis mollitia eum adipisci sunt quisquam, nulla, commodi laboriosam! Delectus at nostrum dicta consequatur accusamus, illum voluptate dignissimos adipisci amet, asperiores ducimus sint iusto atque deserunt non, ad unde vitae. Facere animi harum corporis reiciendis deleniti exercitationem libero sapiente autem saepe, fugiat id dignissimos ullam hic explicabo qui, veniam omnis voluptatum iusto esse. Molestias eligendi corrupti at ea repudiandae minus autem! A velit iure incidunt nisi laborum aliquid, esse quibusdam necessitatibus quia quisquam doloremque ipsam quis, id natus. Et, illum? Quia distinctio quasi enim inventore exercitationem officia sapiente praesentium commodi.
            </p>
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
            <div className='flex flex-col gap-3 items-center' id='employment'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl mt-[5%]'>Employment Law</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.
              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas labore velit quasi dignissimos repellat eum aut quidem quisquam ipsam! Similique, in doloribus sapiente eaque soluta rem expedita quis quisquam earum iusto possimus maiores explicabo, molestias tempore ducimus saepe nostrum. Iure magnam, ad modi quod magni facere ex aspernatur, non minus dicta provident sunt quibusdam suscipit culpa! Cumque, consequatur quia. Voluptates quis iusto omnis corporis neque molestias sed! Nesciunt cum ad consequuntur natus eum expedita culpa magni tempore illum vitae ut facere repellat eius vero nostrum impedit quod harum corporis, eos cumque cupiditate ducimus architecto. Sequi amet numquam quas assumenda dolor beatae placeat? Sit necessitatibus illo repudiandae nesciunt delectus id sed facere culpa deleniti velit voluptates unde corporis quibusdam quo, ipsa quaerat assumenda officiis atque ipsam ut qui mollitia! Aliquid ut minima minus sunt? Qui voluptatibus temporibus deserunt totam architecto officiis ipsam quas quos aperiam vero esse veniam, placeat non neque. Aliquam veniam iusto ea qui facilis fugiat, in inventore iure nostrum, nihil esse commodi eum unde magni similique debitis, modi harum maxime. Enim aliquid explicabo, labore laudantium cupiditate, magnam perferendis adipisci nostrum odit excepturi doloremque dignissimos tenetur itaque vel, illum consequuntur voluptas? Iste reprehenderit error dolor et accusantium voluptates impedit quis incidunt magnam! Expedita odit debitis odio ut quasi eveniet, at deserunt veritatis iste, quod delectus dolor similique? Molestias obcaecati doloremque cupiditate nisi velit aut ipsam eligendi nobis? Illo quo, non provident, natus numquam nemo porro omnis aliquam cupiditate inventore voluptatum eveniet quasi fugit hic ullam aspernatur est quod? Dolores illo molestiae omnis ipsum? Ducimus odio a rerum possimus cupiditate. Iusto impedit sunt asperiores modi odit aperiam neque quaerat corporis? Illum, quia perferendis, atque odio similique exercitationem mollitia, maxime laboriosam necessitatibus quae veritatis sunt. Minus aliquid vero odio! Quas incidunt magnam iure vel eveniet numquam tenetur molestiae quasi possimus!
            </p>
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
            <div className='flex flex-col gap-3 items-center' id='contract'>
            <h1 className='bg-primary rounded-full px-8 py-2 text-white w-full text-center text-2xl mt-[5%]'>Contract</h1>
            <p className='w-[95%] text-lg'>We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you can resolve issues early and amicably.We provide you with direct and expert legal careso that you can resolve issues early and amicably.so that you.

              <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla quos assumenda, in vero sequi veritatis dolores repudiandae soluta minus aliquam dolor praesentium nam dolorum, voluptatibus eveniet reprehenderit delectus dignissimos? Accusamus voluptate commodi vero itaque labore fugit ex eius, iusto reprehenderit odio doloribus tempore vitae quis quos quisquam, officia, deserunt illo repellendus. In perferendis quam eaque odio nihil nobis doloremque eveniet ut eius sint expedita repellat beatae quaerat ratione et, laborum ipsam! Ratione quasi adipisci quo explicabo saepe molestiae vero vel officia odit voluptates aut nisi quisquam eaque exercitationem, aspernatur minima maiores dolor? Obcaecati eaque autem quasi consectetur, itaque quas ipsum a explicabo voluptate, expedita quidem totam optio aliquid illo incidunt placeat repellendus laboriosam laborum consequuntur ipsa quaerat recusandae molestiae fuga doloribus. Ducimus, beatae atque eligendi aspernatur amet ad qui consectetur sapiente tempora dicta ex expedita nulla. Ipsum nesciunt quidem velit dolorem, minima officiis. Nisi officia ipsum modi atque, quos unde minus voluptatem molestiae molestias quisquam accusantium hic iure neque? Perspiciatis expedita labore rerum velit, id doloremque molestiae amet consequatur saepe veniam deleniti vero sit doloribus quo. Architecto saepe placeat facilis beatae fuga, qui blanditiis molestiae officiis inventore fugit mollitia officia nisi ab recusandae! Labore accusantium est id recusandae, eos, provident sed impedit asperiores expedita quam deserunt doloremque aut esse! Veritatis tenetur, assumenda iure at voluptas itaque perferendis doloremque omnis excepturi eum aut mollitia molestiae vel quisquam accusamus corrupti quibusdam vero aspernatur eligendi odio reprehenderit voluptatibus! Voluptas accusamus exercitationem quidem provident nobis sapiente, dolor inventore cum nemo dolore debitis, maxime tempora molestias similique, unde sunt facilis reiciendis a enim molestiae vero iste rem aliquam. In sapiente repellat facere aspernatur, eius libero molestias minus tempore, cum placeat mollitia ullam pariatur ipsa, quo iure quod perspiciatis voluptate perferendis explicabo id provident reprehenderit temporibus voluptates sit. Alias, sed. Tenetur ea quibusdam sit eos.
            </p>
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