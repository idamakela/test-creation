'use client'

import { Dices } from 'lucide-react'
import type { HeaderProps } from '@/types'

const Header = ({ randomizeColors }: HeaderProps) => {
  return (
    <header className='flex justify-between items-center p-2'>
      <h1 className='text-2xl capitalize'>Coolors dupe</h1>
      <button
        title='randomize colors'
        onClick={randomizeColors}
        className='p-3 rounded-full bg-blue'
      >
        <Dices color='white' size={18} />
      </button>
    </header>
  )
}

export default Header
