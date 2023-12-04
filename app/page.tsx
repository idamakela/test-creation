'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import ColorList from '@/components/ColorList'
import { generateRandomHex } from '@/lib/generateRandomHex'
import { color } from '@/types'

export default function Home() {
  const API_URL = 'https://www.thecolorapi.com'
  const [colors, setColors] = useState<color[]>([])

  const fetchData = async (hex: string): Promise<string | undefined> => {
    try {
      const res = await fetch(`${API_URL}/id?hex=${hex}`)
      const data = await res.json()
      return data.name.value
    } catch (error) {
      console.error('Error while fetching data', error)
      return undefined 
    }
  }

  const randomizeColors = async () => {
    const randomHexValues: string[] = Array.from({ length: 5 }, () =>
      generateRandomHex(),
    )

    const promises: Promise<string | undefined>[] = randomHexValues.map((hex) =>
      fetchData(hex.substring(1)),
    )

    const resolvedValues: (string | undefined)[] = await Promise.all(promises)

    const randomizedColorsArr: color[] = randomHexValues.map((hex, index) => ({
      hex,
      name: resolvedValues[index] || 'Undefined', 
    }))

    setColors(randomizedColorsArr)
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
