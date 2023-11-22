import { screen, render } from '@testing-library/react'
import ColorList from '@/components/ColorList'

describe('Color list', () => {
  describe('is rendered correctly', () => {
    test('it has a container', () => {
      render(<ColorList />)
  
      const colorListContainer = screen.getByRole('list')
  
      expect(colorListContainer).toBeInTheDocument()
    })

    test('it renders five color items on page load', () => {
      render(<ColorList />)

      const colorItems = screen.getAllByRole('listitem')

      expect(colorItems.length).toBe(5)
    })
  })

  describe('functions as expected', () => {

  })
})