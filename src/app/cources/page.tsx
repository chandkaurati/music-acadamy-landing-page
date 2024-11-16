"use client";
import React from "react";
import courcedaata from "@/data/music_cources.json";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

    interface Cource {
        id: number;
        title: string;
        slug: string;
        description: string;
        price: number;
        instructor: string;
        isFeatured: boolean;
        featuredImage : string;
      }

function Cources() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl  text-center font-sans font-bold mb-8 text-white">
        All Cources {`(${courcedaata?.length})`}
      </h1>
      <div className="flex flex-wrap sm:gap-6 justify-center">
        {courcedaata.map((cource:Cource)=> (
               <CardContainer key={cource.id} className="inter-var">
               <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                 <CardItem
                   translateZ="50"
                   className="text-xl font-bold text-neutral-600 dark:text-white"
                 >
                  {cource.title}
                 </CardItem>
                 <CardItem
                   as="p"
                   translateZ="60"
                   className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                 >
                   {cource.description}
                 </CardItem>
                 <CardItem
                   translateZ="100"
                   rotateX={20}
                   rotateZ={-10}
                   className="w-full mt-4"
                 >
                   <Image
                     src={cource.featuredImage }
                     height="1000"
                     width="1000"
                     className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                     alt={cource.title}
                   />
                 </CardItem>
                 <div className="flex justify-between items-center mt-20">
                   <CardItem
                     translateZ={20}
                     translateX={-40}
                     as="button"
                     className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                   >
                    Enroll Now
                   </CardItem>
                   <CardItem
                     translateZ={20}
                     translateX={40}
                     as="button"
                     className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                   >
                     Sign up
                   </CardItem>
                 </div>
               </CardBody>
             </CardContainer> 
        ))}
      </div>
    </div>
  );
}

export default Cources;