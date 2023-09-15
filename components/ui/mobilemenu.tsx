import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator } from './dropdown-menu';
import React from 'react'
import { DropdownMenuTrigger } from './dropdown-menu';
import { Button } from './button';

const MobileMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="grad" className='text-xl'>
                Open
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-50'>
            <DropdownMenuGroup className='mr-2'>
                <DropdownMenuItem>
                    <span>All</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <span>About</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <span>Projects</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <span>Media</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileMenu;
