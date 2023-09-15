'use client';
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './card';
import { Separator } from '@radix-ui/react-dropdown-menu';


const Skills = () => {
  return (
    <Card className='h-full w-full rounded-xl p-2'>
        <CardHeader className='items-center text-2xl font-bold p-2'>
            My top Rated Soft Skills
        </CardHeader>
        <Separator />
        <CardDescription className='text-muted-foreground text-center pb-2'>
            These are the skills I get commended about most.
        </CardDescription>
        <Separator />
        <CardContent className='pl-3 items-left'>
            <ul className='justify-evenly'>
                <li className='pl-5 pb-2'>Problem Solving</li>
                <li className='pl-5 pb-2'>Attention to detail</li>
                <li className='pl-5 pb-2'>Listening</li>
                <li className='pl-5 pb-2'>Collaboration</li>
                <li className='pl-5 pb-2'>Feedback communication</li>
                
            </ul>
        </CardContent>
    </Card>
  )
}

export default Skills;
