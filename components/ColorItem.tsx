import { useRef, useState } from 'react'
import { ColorItemProps } from '@/types'
import Button from './Button'
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
      className='flex w-full flex-col items-center justify-center'
      style={{ backgroundColor: color.hex }}
    >
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
        <div>
          <Button variant='outline' onClick={() => addRandomColor()}>
            Add Color
          </Button>
          <Button variant='outline' onClick={() => removeColor(color)}>
            Remove Color
          </Button>
          <Button variant='outline' onClick={() => setIsEditing(!isEditing)}>
            Change Color
          </Button>
        </div>
      </div>
    </li>
  )
}

export default ColorItem
