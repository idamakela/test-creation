import { fireEvent, render, screen } from '@testing-library/react'
import Home from '@/app/page'

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
      const firstColorItem = colorItems[0]
  
      const buttons = screen.getAllByTitle(/remove color/i)
      fireEvent.click(buttons[0])

      const rerenderedColorItems = screen.getAllByRole('listitem')
  
      expect(rerenderedColorItems[0]).not.toBe(firstColorItem)
    })
  
    test('random color can be added', () => {
      render(<Home />)
  
      const buttons = screen.getAllByTitle(/add color/i)
      fireEvent.click(buttons[0])
      
      const colorItems = screen.getAllByRole('listitem')
  
      expect(colorItems.length).toBe(6)
    })

    test('color can be changed by user input', () => {
      render(<Home />)

      const newHex = '#000000'
      
      const hexButtons = screen.getAllByRole('button', { name: /^#?[a-f0-9]{6}$/i })
      fireEvent.click(hexButtons[1])

      const hexInput = screen.getByLabelText('Hex color')
      fireEvent.change(hexInput, { target: { value: newHex } })

      const form = screen.getByRole('form', { name: 'change-color' })
      fireEvent.submit(form)
      
      const rerenderedHexButtons = screen.getAllByRole('button', { name: /^#?[a-f0-9]{6}$/i })
  
      expect(rerenderedHexButtons[1]).toHaveTextContent(newHex)
    })
  })
})