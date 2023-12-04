'use client'

import { ChangeColorProps } from '@/types'
import { useState } from 'react'
import { hexcolorRegex } from '@/tests/utils'

const ChangeColor = ({
  color,
  changeColor,
  disableEditing,
  inputRef,
}: ChangeColorProps) => {
  const [editedColor, setEditedColor] = useState<string>(color.hex)

  const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    // if (!hexcolorRegex.test(newValue)) {
    //   alert('Please enter a hex value')
    // }

    setEditedColor(newValue)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputRef?.current?.value.match(hexcolorRegex)) {
      changeColor(color, { ...color, hex: editedColor })
    } // Update only the hex property'
    disableEditing()
  }

  /**
   * is inputRef a forward ref? or the button in color item?
   */

  return (
    <form aria-label='change-color' onSubmit={handleFormSubmit}>
      <label hidden htmlFor='hex-color'>
        Hex Color
      </label>
      <input
        ref={inputRef}
        id='hex-color'
        name='hex'
        type='text'
        onBlur={disableEditing}
        onChange={handleHexInputChange}
        value={editedColor}
        autoFocus
      />
    </form>
  )
}

export default ChangeColor
