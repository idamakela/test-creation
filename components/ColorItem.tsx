import { useRef, useState } from 'react'
import { ColorItemProps, color } from '@/types'
import Button from './Button'

const ColorItem = ({
  color,
  addRandomColor,
  removeColor,
  changeColor,
  isLastColor,
  amountOfColors,
}: ColorItemProps) => {
  const inputRef = useRef<color>() // ref for what?? button ??
  const [isEditing, setIsEditing] = useState(false)
  const [editedColor, setEditedColor] = useState<string>(color.hex)

  const disableEditing = ()=> {
    // ???
  }

  const handleHexButtonClick = () => {
    setIsEditing(true)
  }

  const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setEditedColor(newValue)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    changeColor(color, { ...color, hex: editedColor }) // Update only the hex property
    setIsEditing(false)
  }

  return (
    <li
      className='flex w-full flex-col items-center justify-center'
      style={{ backgroundColor: color.hex }}
    >
      <div className='m-4'>
        {isEditing ? (
          <form onSubmit={handleFormSubmit}>
            <input
              type='text'
              value={editedColor}
              onChange={handleHexInputChange}
              aria-label='Hex color'
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
            <button type='submit'>Save</button>
          </form>
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
