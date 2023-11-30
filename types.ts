import { Dispatch, RefObject, SetStateAction } from 'react'

export type color = {
  hex: string
  name: string
}

export type AddColorProps = {
  addRandomColor: () => void
}

export type ChangeColorProps = {
  color: color
  changeColor: (oldColor: color, newColor: color) => void
  disableEditing: () => void
  inputRef: RefObject<HTMLInputElement> | null
}

export type ColorItemProps = {
  color: color
  addRandomColor: () => void
  removeColor: (color: color) => void
  changeColor: (oldColor: color, newColor: color) => void
  isLastColor: boolean
  amountOfColors: number
}

export type ColorListProps = {
  colors: color[]
  setColors: Dispatch<SetStateAction<color[]>>
}

export type RemoveColorProps = {
  color: color
  removeColor: (color: color) => void
}

export type HeaderProps = {
  randomizeColors: () => void
}
