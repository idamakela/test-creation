import { screen, render } from '@testing-library/react'
import ColorList from '@/components/ColorList'
import { hexcolorRegex, mockColor, isUnique } from './utils'

const mockProps = {
  colors: [mockColor, { hex: '#EF4444', name: 'red' }],
  setColors: jest.fn()
}

describe('Color list', () => {
  describe('is rendered correctly', () => {
    test('it has a container', () => {
      render(<ColorList {...mockProps} />)
  
      const colorListContainer = screen.getByRole('list')
  
      expect(colorListContainer).toBeInTheDocument()
    })
  })

  describe('functions as expected', () => {
    test('the same color should never be displayed at multiple places at once', () => {
      render(<ColorList {...mockProps} />)

      const hexButtons = screen.getAllByRole('button', { name: hexcolorRegex })
      const hexColors = hexButtons.map(button => button.textContent)

      expect(isUnique(hexColors)).toBeTruthy()
    })

    test('if 10 colors are rendered all add buttons should be unrendered', () => {
      render(<ColorList {...mockProps} />)

      const colorItems = screen.getAllByRole('listitem')
      const addButtons = screen.queryAllByTitle(/add color/i)

      if (colorItems.length >= 10) expect(addButtons.length).toBe(0)
    })

    test('if 2 colors are rendered all remove buttons should be unrendered', () => {
      render(<ColorList {...mockProps} />)

      const colorItems = screen.getAllByRole('listitem')
      const removeButtons = screen.queryAllByTitle(/remove color/i)

      if (colorItems.length <= 2) expect(removeButtons.length).toBe(0)
    })
  })
})