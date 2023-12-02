'use client'

import { ChangeColorProps, color as ColorType } from '@/types'

const ChangeColor = ({
  color,
  changeColor,
  disableEditing,
  inputRef,
}: ChangeColorProps) => {
  const oldColor: ColorType | undefined = color
  const newColor: ColorType | undefined = inputRef?.current // .????

  /**
   * is inputRef a forward ref? or the button in color item?
   */

  return (
    <form aria-label='change-color'>
      <label hidden htmlFor='hex-color'>
        Hex Color
      </label>
      <input
        id='hex-color'
        name='hex'
        type='text'
        onBlur={disableEditing}
        onChange={() => changeColor(oldColor, newColor)} // props!!
        autoFocus
      />
    </form>
  )
}

export default ChangeColor
