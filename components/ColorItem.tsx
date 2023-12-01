import { useState, useEffect } from 'react'
import { ColorItemProps } from '@/types'
import { hexcolorRegex } from '@/tests/utils'
import { generateRandomHex } from '@/lib/generateRandomHex'
import Button from './Button'

const ColorItem = ({
  color,
  addRandomColor,
  removeColor,
  changeColor,
  isLastColor,
  amountOfColors,
}: ColorItemProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [randomHexValues, setRandomHexValues] = useState<string[]>([])

  const generateUniqueRandomHexValues = (count: number): string[] => {
    const hexValues: string[] = []
    while (hexValues.length < count) {
      const randomHex = generateRandomHex()
      if (!hexValues.includes(randomHex)) {
        hexValues.push(randomHex)
      }
    }
    return hexValues
  }

  const handleHexButtonClick = () => {
    setIsEditing(true)
  }

  const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (newValue.match(hexcolorRegex)) {
      setRandomHexValues([...randomHexValues.slice(0, 4), newValue])
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsEditing(false)
  }

  useEffect(() => {
    const uniqueHexValues = generateUniqueRandomHexValues(5)
    setRandomHexValues(uniqueHexValues)
  }, [])

  return (
    <ul className='flex h-[80vh] justify-evenly'>
      {randomHexValues.map((color, index) => (
        <li
          className='flex w-full'
          key={index}
          style={{ backgroundColor: color }}
        >
          {isEditing ? (
            <form onSubmit={handleFormSubmit}>
              <input
                type='text'
                value={randomHexValues[4] || ''}
                onChange={handleHexInputChange}
                aria-label='Hex color'
                onBlur={() => setIsEditing(false)}
                autoFocus
              />
            </form>
          ) : (
            <Button variant='ghost' onClick={handleHexButtonClick}>
              <h3>{color}</h3>
            </Button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default ColorItem
