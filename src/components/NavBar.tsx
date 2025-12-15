import React from 'react'
import { Button } from './ui/button'
import layer2 from '../assets/layers-2.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function NavBar() {
  return (
    <div className='flex flex-row h-[100px] bg-amber-300 w-full items-center p-1'>
        <div className='h-full w-full flex-1 flex flex-row items-center md:justify-start justify-center p-3 gap-x-8'>
            <a className='text-5xl font-bold md:text-3xl  hover:cursor-pointer'>Shortly</a>
            <a className='hidden md:block hover:cursor-pointer hover:text-black text-gray-500' href="">Features</a>
            <a className='hidden md:block hover:cursor-pointer hover:text-black text-gray-500' href="">Pricing</a>
            <a className='hidden md:block hover:cursor-pointer hover:text-black text-gray-500' href="">Resources</a>
        </div>
        <div className='h-full w-full flex-1 flex flex-row items-center md:justify-end justify-center p-3 gap-x-8'>
            <a className='hidden md:block hover:cursor-pointer hover:text-black text-gray-500' href="">Login</a>
            <Button className='bg-[#00e7d5] rounded-3xl hidden md:block hover:cursor-pointer'>Sign Up</Button>
            <DropdownMenu >
                <DropdownMenuTrigger className="block md:hidden">
                    <img src={layer2} alt="" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <a className='hover:cursor-pointer hover:text-black text-gray-500' href="">Features</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className='hover:cursor-pointer hover:text-black text-gray-500' href="">Pricing</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <a className='hover:cursor-pointer hover:text-black text-gray-500' href="">Resources</a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
    </div>
  )
}
