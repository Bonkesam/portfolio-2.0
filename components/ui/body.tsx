'use client';
import React from 'react'
import About from './about';
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from './button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Separator } from './separator';
import SpotifyPlayer from './SpotifyPlayer';
import Socials from './socials';
import Technologies from './Technologies';
import Skills from './Skills';


const Body = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-3 ml-9 mr-10 bg-transparent'>

        <div className='border-[1px] col-span-1 lg:col-span-2 bg-none text-center rounded-2xl'>
            <About/>
        </div>

        <div className=' h-full bg-none bg-cover border-[1px] rounded-xl'>
          <Socials />
        </div>

        <div className='h-full bg-none border-[1px] rounded-xl'>
          <Technologies />
        </div>

        <div className='h-full w-full bg-none border-[1px]  rounded-xl'>
          <Skills />
        </div>
        <div className='h-full row-span-1 lg:row-span-2 bg-none border-[1px] text-center rounded-xl'>
          <Card className='h-full'>
            <CardHeader className='items-center'>
              <div className='p-0 m-0 items-center'>
                <Image 
                  alt="Spotify"
                  src="/images/spotify.png"
                  height={80}
                  width={80}
                />
              </div>
              <CardTitle className='text-2xl font-bold'>My top Music</CardTitle>
              <Separator />
              <CardDescription>
                <p className='text-muted-foreground'>
                  <i>The good thing about music is that when it hits, you feel no pain.</i>
                </p>
              </CardDescription>
            </CardHeader>
              <CardContent >
                  <SpotifyPlayer />
              </CardContent>
          </Card>
        </div>
        <div className=' h-full md:col-span-1 lg:col-span-2 bg-none border-[1px] text-center rounded-xl'>
          <Card className='h-full '>
            <CardHeader>
              <CardTitle className='items-center font-bold text-2xl p-2'>How it started vs. How it&apos;s Going.
              </CardTitle> 
              <Separator />
              <CardDescription>
                <p className='text-muted-foreground pt-2'><i>This is a story of how I became a software engineer.</i>
                </p>
              </CardDescription>
              <CardContent>
                <p className='text-justify text-lg pt-2'>
                  We all have dreams and aspirations when we&apos;re young. A vision of who we want to become and the impact we hope to have on the world. My journey has had its twists and turns, but the passion that sparked my dream years ago still burns bright today...<span className='text-xl font-bold'><Link href='/blog'>Read more</Link></span>
                </p>
              </CardContent> 
            </CardHeader>
          </Card>
        </div>
      
      
    </div>
  )
}

export default Body;
