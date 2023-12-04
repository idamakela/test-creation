import { RefObject, useRef, useState } from 'react'
import { ColorItemProps } from '@/types'
import Button from './Button'
import RemoveColor from './RemoveColor'
import AddColor from './AddColor'
import ChangeColor from './ChangeColor'
import { hexcolorRegex } from '@/tests/utils'

const ColorItem = ({
  color,
  addRandomColor,
  removeColor,
  changeColor,
  isLastColor,
  amountOfColors,
}: ColorItemProps) => {
  const inputRef = useRef()
  const [isEditing, setIsEditing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const disableEditing = () => {
    setIsEditing(false)
  }

  const handleHexButtonClick = () => {
    setIsEditing(true)
  }

  const validateHex = (hex: string): boolean => {
    return /^#?[a-fA-F0-9]{6}$/.test(hex)
  }

  return (
    <li
      className='relative flex h-full w-full flex-col items-center justify-center'
      style={{ backgroundColor: color.hex }}
    >
      {amountOfColors < 10 && (
        <div className='group/add absolute bottom-auto right-0 top-0 z-50 flex h-full w-1/5 items-center bg-inherit'>
          {isLastColor && <AddColor addRandomColor={addRandomColor} />}
        </div>
      )}

      {amountOfColors > 2 && (
        <div className='group/remove flex h-1/2 items-end bg-inherit'>
          <RemoveColor color={color} removeColor={removeColor} />
        </div>
      )}

      <div className='m-4'>
        <h3 className='text-center'>{color.name ? color.name : ''}</h3>
        {isEditing ? (
          <div>
            <ChangeColor
              color={color}
              changeColor={changeColor}
              disableEditing={disableEditing}
              inputRef={inputRef}
            />
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        ) : (
          <Button
            variant='ghost'
            name={color.hex.match(hexcolorRegex) ? color.hex : '#000000'}
            onClick={handleHexButtonClick}
          >
            {color.hex}
          </Button>
        )}
      </div>
      {amountOfColors < 10 && (
        <div className='group/add absolute bottom-auto left-0 top-0 z-50 flex h-full w-1/5 items-center bg-inherit'>
          <AddColor addRandomColor={addRandomColor} />
        </div>
      )}
    </li>
  )
}

export default ColorItem
