'use client';
import React, { Component } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import Image from 'next/image';
import TypewriterComponent from "typewriter-effect";

class About extends Component { render() {
   return (
    <div>
        

        <Card className='border-none rounded-2xl'>
            <CardHeader className='items-center'>
                <CardTitle >
                    <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        <TypewriterComponent 
                            options={{
                                strings: ["Brief Introduction"],
                                autoStart: true,
                                loop: true
                            }}
                        /> 
                    </div>
                    
                </CardTitle>
            <div>
                <Image
                    width={70}
                    height={70} 
                alt='Avatar'
                src="/images/avatar.svg"
                />
            </div>
            </CardHeader>
            <CardContent>
                
                <p className='text-left'>
                <span className='text-bold text-2xl'>I'm Bonke</span> I Full Stack Developer dedicated to crafting exceptional digital experiences. I bring your vision to life with thoughtful design and robust code. My expertise in React, Node, MongoDB, MySQL, Next Js and other modern technologies enables me to develop scalable, performant solutions customized for your needs. I keep up with the latest industry trends so your product stands out in a competitive market.<br />
                
                The result is a pixel-perfect, intuitive product that delights your customers. Let's chat about how my development skills can provide real value and growth for your business.
                </p>
            </CardContent>

        </Card>
    </div>
  )
}
}

export default About;
