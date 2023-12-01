'use client'
import { ColorListProps, ColorItemProps } from '@/types'
import ColorItem from './ColorItem'

const ColorList = ({ colors }: ColorListProps) => {
  const addRandomColor = () => {
    // Implement logic to add a random color
  }

  const removeColor = (color: color) => {
    // Implement logic to remove a color
  }

  const changeColor = (oldColor: color, newColor: color) => {
    // Implement logic to change a color
  }

  return (
    <div role='list'>
      <ColorItem
        addRandomColor={addRandomColor}
        removeColor={removeColor}
        changeColor={changeColor}

        // Suggestions of logis to props
        // isLastColor={index === colors.length - 1}
        // amountOfColors={colors.length}
      />
    </div>
  )
}

export default ColorList
