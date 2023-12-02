'use client'

import { useData } from '@/hooks/useData'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import ColorList from '@/components/ColorList'
import { generateRandomHex } from '@/lib/generateRandomHex'

export default function Home() {
  const [colors, setColors] = useState<color[]>([])

  const randomizeColors = () => {
    const randomHexValues: string[] = Array.from({ length: 5 }, () =>
      generateRandomHex(),
    )
    const randomizedColors: color[] = randomHexValues.map((hex) => ({
      hex,
      name: '',
    }))
    setColors(randomizedColors)
  }

  useEffect(() => {
    randomizeColors()
  }, [])

  return (
    <>
      <Header randomizeColors={randomizeColors} />
      <main>
        <ColorList colors={colors} setColors={setColors} />
      </main>
    </>
  )
}
