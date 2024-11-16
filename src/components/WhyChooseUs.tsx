"use client"
import React from 'react'
import {AboutAcadamy} from "@/data/About_acadamy"
import { StickyScroll } from './ui/sticky-scroll-reveal'

function WhyChooseUs() {
  return (
    <div>
   <StickyScroll content={AboutAcadamy.whyChooseus}/>
    </div>
  )
}

export default WhyChooseUs
