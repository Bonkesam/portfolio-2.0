import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './card';

const Twitter = () => {
  return (
    <Card className='border-none rounded-2xl'>
        <CardContent>
            <Image 
                alt='Twitter'
                src="/images/twitter.png"
                objectFit='cover'
            />
        </CardContent>
    </Card>
  )
}

export default Twitter;
