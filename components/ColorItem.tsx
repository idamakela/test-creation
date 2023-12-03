import { useRef, useState } from 'react'
import { ColorItemProps } from '@/types'
import Button from './Button'
import ChangeColor from './ChangeColor'

const ColorItem = ({
  color,
  addRandomColor,
  removeColor,
  changeColor,
  isLastColor,
  amountOfColors,
}: ColorItemProps) => {
  const inputRef = useRef() // ref for what?? button ??
  const [isEditing, setIsEditing] = useState(false)

  const disableEditing = () => {
    setIsEditing(false)
  }

  const handleHexButtonClick = () => {
    setIsEditing(true)
  }

  return (
    <li
      className='flex w-full flex-col items-center justify-center'
      style={{ backgroundColor: color.hex }}
    >
      <div className='m-4'>
        {isEditing ? (
          <ChangeColor
            color={color}
            changeColor={changeColor}
            disableEditing={disableEditing}
            inputRef={inputRef}
          />
        ) : (
          <Button variant='ghost' onClick={handleHexButtonClick}>
            <h3>{color.hex}</h3>
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
