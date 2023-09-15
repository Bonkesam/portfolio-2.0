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


const Body = () => {
  return (
    <div className='grid grid-rows-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 grid-flow-row-dense gap-3 ml-9 mr-10 bg-transparent'>
        <div className='border-[1px] h-50 w-50 col-span-2 bg-none text-center rounded-2xl'>
            <About/>

        </div>
        <div className=' h-50 bg-[url(/images/github.png)] bg-cover bg-white border-[1px] rounded-xl  relative'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className='bg-black text-white'>
                  <Link href="https://github.com/Bonkesam">Git</Link></Button>
              </TooltipTrigger>
              <TooltipContent className='text-white bg-black'>
                <p>Unlock the gateway to my coding adventures. Click here to explore my GitHub galaxy!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
        <div className='h-50 bg-[url(/images/twitter.png)] bg-cover border-[1px] text-center rounded-xl transition-transform relative cursor-pointer'>
          <Link href="https://twitter.com/ItsBonkeSam">
            <TooltipProvider >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className='text-bold text-center absolute top-0 right-0 bg-black text-white'>
                    Twitter</Button>
                </TooltipTrigger>
                <TooltipContent className='bg-black text-white'>
                  <p>Stay up to date! Follow me on Twitter to keep up with my latest tweets, ideas, and what I&apos;m working on!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          </Link>

        </div>
        <div className='h-50 bg-[url(/images/linkedin.png)] bg-cover border-[1px] text-center rounded-xl relative'>
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className='bg-black text-white place absolute top-0 right-0'>
                  <Link href="https://www.linkedin.com/in/bonke-sam/">LinkedIn</Link>
                  </Button>
              </TooltipTrigger>
              <TooltipContent className="text-white bg-black">
                <p>Let&apos;s connect! Follow me on LinkedIn to see my latest projects, achievements, and to network!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
        <div className='h-50 row-span-2 bg-none border-[1px] text-center rounded-xl'>
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
              <CardTitle>My top Music</CardTitle>
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
        <div className=' h-50 lg:col-span-2 bg-none border-[1px] text-center rounded-xl'>
          <Card className='h-full '>
            <CardHeader>
              <CardTitle className='items-center text-bold text-3xl p-2'>How it started vs. How it&apos;s Going.
              </CardTitle> 
              <Separator />
              <CardDescription>
                <p className='text-muted-foreground pt-2'><i>This is a story of how I became a software engineer.</i>
                </p>
              </CardDescription>
              <CardContent>
                <p className='text-justify text-lg pt-2'>
                  We all have dreams and aspirations when we&apos;re young. A vision of who we want to become and the impact we hope to have on the world. My journey has had its twists and turns, but the passion that sparked my dream years ago still burns bright today...<span><Link href='/blog'>Read more</Link></span>
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      
      
    </div>
  )
}

export default Body;
