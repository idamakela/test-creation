'use client'

import { Dices } from 'lucide-react'
import type { HeaderProps } from '@/types'
import Button from './Button'

const Header = ({ randomizeColors }: HeaderProps) => {
  return (
    <header className='flex items-center justify-between p-2'>
      <h1 className='text-2xl capitalize'>Coolors dupe</h1>
      <Button
        title='randomize colors'
        onClick={randomizeColors}
      >
        <Dices color='white' size={18} />
      </Button>
    </header>
  )
}

export default Header
