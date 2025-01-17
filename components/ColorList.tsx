'use client'
import { ColorListProps, color, ColorItemProps } from '@/types'
import ColorItem from './ColorItem'
import { generateRandomHex } from '@/lib/generateRandomHex'

const ColorList = ({ colors, setColors }: ColorListProps) => {
  const addRandomColor = () => {
    // behöver göras om pga home test

    /**
     * lägga till den till vänster om aktuell knapp - om ej isLastItem -> lägg till till höger
     */
    if (colors.length < 7) {
      const newColor = {
        hex: generateRandomHex(),
        name: '',
      }
      setColors([...colors, newColor])
    }
  }

  const removeColor = (colorToRemove: color) => {
    // Behöver göras om för att klara home test

    if (colors.length > 1) {
      const updatedColors = colors.filter((color) => color !== colorToRemove)
      setColors(updatedColors)
    }
  }

  const changeColor = (oldColor: color, newColor: color) => {
    const updatedColors = colors.map((color) =>
      color === oldColor ? { ...color, hex: newColor.hex } : color,
    )
    setColors(updatedColors)
  }

  const renderColorItem = (color: color, index: number): JSX.Element => {
    const colorItemProps: ColorItemProps = {
      color,
      addRandomColor,
      removeColor,
      changeColor,
      isLastColor: index === colors.length - 1,
      amountOfColors: colors.length,
    }

    return <ColorItem key={index} {...colorItemProps} />
  }

  return (
    <ul className='flex h-[88vh] flex-col md:flex-row'>
      {colors.map((color, index) => renderColorItem(color, index))}
    </ul>
  )
}

export default ColorList
