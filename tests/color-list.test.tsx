import { screen, render } from '@testing-library/react'
import ColorList from '@/components/ColorList'

const mockColors = [
  { hex: '#4C98FB', name: 'blue' },
  { hex: '#EF4444', name: 'red' },
]

const mockProps = {
  colors: mockColors,
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

      const hexButtons = screen.getAllByRole('button', { name: /^#?[a-f0-9]{6}$/i })
      const hexCodes = hexButtons.map(button => button.textContent)

      const isUnique = (array: any[]) => new Set(array).size === array.length

      expect(isUnique(hexCodes)).toBeTruthy()
    })

    test('the last color item should not have an add button', () => {
      render(<ColorList {...mockProps} />)

      const colorItems = screen.getAllByRole('listitem')
      const addButtons = screen.queryAllByTitle(/add color/i)

      expect(addButtons[colorItems.length - 1]).toBeUndefined()
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