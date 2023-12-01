'use client'

import { ChangeColorProps, color as ColorType } from '@/types'
import { useEffect, useState } from 'react'

const ChangeColor = ({
  color,
  changeColor,
  disableEditing,
  inputRef,
}: ChangeColorProps) => {
  const [newColor, setNewColor] = useState<ColorType>()
  const [userInput, setUserInput] = useState<string | undefined>()
  const [hexName, setHexName] = useState<string | undefined>()
  const oldColor = color

  // fetcher hook for color name + set hexColor

  useEffect(() => {
    setNewColor({hex: userInput, name: hexName})
  }, [userInput, hexName])

  useEffect(()=> {
    changeColor(oldColor, newColor)
  }, [oldColor, newColor, changeColor])

  return (
    <form aria-label='change-color'>
      <label hidden htmlFor='hex-color'>
        Hex Color
      </label>
      <input
        ref={inputRef}
        id='hex-color'
        name='hex-color'
        type='text'
        value={color.hex}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </form>
  )
}

export default ChangeColor
