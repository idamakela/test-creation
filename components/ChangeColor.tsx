'use client'

import { ChangeColorProps, color as ColorType } from '@/types'
import { useEffect, useState } from 'react'
import { useData } from '@/hooks/useData'

//mock data
import { mockColor } from '@/tests/utils'

const ChangeColor = ({
  color,
  changeColor,
  disableEditing,
  inputRef,
}: ChangeColorProps) => {
  const [newColor, setNewColor] = useState<ColorType | undefined>()
  const [userInput, setUserInput] = useState<string | undefined>()
  const [hexName, setHexName] = useState<string | undefined>()
  const oldColor = inputRef.current?.value

  // fetcher hook for color name + set hexColor

  useEffect(() => {
    setNewColor({ hex: userInput, name: hexName })
  }, [userInput, hexName])

  useEffect(() => {
    if (inputRef?.current) {
      changeColor(oldColor, newColor)
    }
  }, [oldColor, newColor, changeColor, inputRef])

  /**
   * color = oldColor
   * changeColor -> called when user changes the input
   * disableEditing ??? change type? - when button is "tunred" to input ??
   * inputRef -> referens for input so color item has the inputs color ???
   */

  return (
    <form aria-label='change-color'>
      <label hidden htmlFor='hex-color'>
        Hex Color
      </label>
      <input
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
