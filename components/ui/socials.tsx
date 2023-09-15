'use client';
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './card';
import { Separator } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Socials = () => {
  return (
    <Card className='h-full w-full rounded-xl p-3'>
        <CardHeader className='items-center text-2xl font-bold'>
            Let&apos;s Connect
        </CardHeader>
        <Separator />
        <CardDescription className='text-muted-foreground text-center pb-2'>
            Find me on my social media handles
        </CardDescription>
        <CardContent className='pl-2 justify justify-between'>
            <div className='flex p-5'>
                <Twitter className='pr-3'/>
                <Link href="https://twitter.com/ItsBonkeSam">Twitter
                </Link>
            </div>
            <Separator />
            <div className='flex p-5'>
                <Github className='pr-3'/>
                <Link href="https://github.com/Bonkesam">Github
                </Link>
            </div>
            <Separator />
            <div className='flex p-5'>
                <Linkedin className='pr-3' />
                <Link href="https://www.linkedin.com/in/bonke-sam/">LinkedIn
                </Link>
            </div>
        </CardContent>
    </Card>
  )
}

export default Socials;
