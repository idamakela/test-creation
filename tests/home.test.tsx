import { fireEvent, render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { hexcolorRegex, mockHex } from './utils'

describe('Home page', () => {
  describe('is rendered correctly', () => {
    test('it renders five color items on page load', () => {
      render(<Home />)
  
      const colorItems = screen.getAllByRole('listitem')
  
      expect(colorItems.length).toBe(5)
    })
  })

  describe('functions as expected', () => {
    test('color can be removed', () => {
      render(<Home />)
  
      const colorItems = screen.getAllByRole('listitem')
  
      const buttons = screen.getAllByTitle(/remove color/i)
      fireEvent.click(buttons[0])

      const rerenderedColorItems = screen.getAllByRole('listitem')
  
      expect(rerenderedColorItems[0]).not.toBe(colorItems[0])
    })
  
    test('random color can be added', () => {
      render(<Home />)

      const colorItems = screen.getAllByRole('listitem')
      
      const buttons = screen.getAllByTitle(/add color/i)
      fireEvent.click(buttons[1])

      const rerenderedColorItems = screen.getAllByRole('listitem')
      
      expect(rerenderedColorItems.length).toBe(colorItems.length + 1)
      expect(rerenderedColorItems[2]).not.toBe(colorItems[2])
    })

    test('color can be changed by user input', () => {
      render(<Home />)
      
      const hexButtons = screen.getAllByRole('button', { name: hexcolorRegex })
      fireEvent.click(hexButtons[1])

      const hexInput = screen.getByLabelText('Hex color')
      fireEvent.change(hexInput, { target: { value: mockHex } })

      const form = screen.getByRole('form', { name: 'change-color' })
      fireEvent.submit(form)
      
      const rerenderedHexButtons = screen.getAllByRole('button', { name: hexcolorRegex })
  
      expect(rerenderedHexButtons[1]).toHaveTextContent(mockHex)
    })
  })
})