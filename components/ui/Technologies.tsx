'use client';
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './card';
import { Separator } from '@radix-ui/react-dropdown-menu';


const Technologies = () => {
  return (
    <Card className='h-full w-full rounded-xl p-2'>
        <CardHeader className='items-center text-2xl font-bold p-2'>
            Technologies
        </CardHeader>
        <Separator />
        <CardDescription className='text-muted-foreground text-center pb-2'>
            I have a vast experience using these tools.
        </CardDescription>
        <Separator />
        <CardContent className='pl-3 items-left'>
            <ul className='justify-evenly'>
                <li className='pl-5'>Python</li>
                <li className='pl-5'>Typescript</li>
                <li className='pl-5'>MongoDB</li>
                <li className='pl-5'>MySQL</li>
                <li className='pl-5'>React</li>
                <li className='pl-5'>NextJs</li>
                <li className='pl-5'>Django</li>
                <li className='pl-5'>NodeJs</li>
            </ul>
        </CardContent>
    </Card>
  )
}

export default Technologies;
