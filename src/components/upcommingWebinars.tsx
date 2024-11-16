
import React from 'react'
import upCommingwebinars from "@/data/webinarData.json"
import { HoverEffect } from './ui/card-hover-effect'


function UpcommingWebiars() {
  return (
    <div className='p-12 bg-gray-900'> 
    <div className='s'>
      <div className='text-center'>
        <h2 className="text-base text-teal-600 font-bold tracking-tight uppercase ">FEATURED WEBINARS</h2>
        <p className="
        mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text4
        ">Enhance your musical journy</p>
      </div>
      <div className='mt-10'>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={
        upCommingwebinars.map(webinar => (
            {
                title: webinar.title,
                description:webinar.description,
                link : "/"
            }
        ))
      } />
    </div>
      </div>
    </div>
    </div>
  )
}

export default UpcommingWebiars
