import Navbar from '@/components/ui/navbar-blog';
import { ThemeProvider } from '@/components/ui/theme-provider';
import React from 'react'

const PageLayout = async ({
    children
}: {children: React.ReactNode;}) => {
  return (
    <div className='h-full w-full relative ml-9 mr-9'>
        <main>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

            <Navbar/>
            {children}
        </ThemeProvider>
        </main>
      
    </div>
  )
}

export default PageLayout;
