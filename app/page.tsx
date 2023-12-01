'use client'

import { useData } from '@/hooks/useData'
import { useEffect } from 'react'
import Header from '@/components/Header'
import ColorList from '@/components/ColorList'

const randomizeColors = async () => {
  // get random colors
}

export default function Home() {
  const data = useData('a3e2dd')

  useEffect(() => {
    console.log(data)
  })

  return (
    <>
      <Header randomizeColors={randomizeColors} />
      <main>
        <ColorList />
      </main>
    </>
  )
}
