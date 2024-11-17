"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
   >
    <Menu setActive={setActive}>
      <Link href={"/"}>
      <MenuItem setActive={setActive} active={active} item="Home">
      </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Our Cources">
      <div className="flex flex-col space-y-2 text-sm"> 
      <HoveredLink href="/cources">All Cources</HoveredLink>
      <HoveredLink href="/cources">Basic music Theory</HoveredLink>
      <HoveredLink href="/cources">Advance composition</HoveredLink>
      <HoveredLink href="/cources">Song Writing</HoveredLink>
      <HoveredLink href="/cources">Music Production</HoveredLink>
      </div>
      </MenuItem>
      <Link href="/contact-us">
      <MenuItem setActive={setActive} active={active} item="Contact Us">
      </MenuItem>
      </Link>
    </Menu>  
    </div>
  )
}

export default Navbar
