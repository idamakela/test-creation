'use client'

import Header from '@/components/Header'

import { fetchData } from '@/lib/fetchData'
import { useData } from '@/hooks/useData'
import { useEffect } from 'react'

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
      <main>main</main>
    </>
  )
}
