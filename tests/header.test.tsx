import { fireEvent, render, screen } from '@testing-library/react'
import Header from '@/components/Header'

const mockProps = {
  randomizeColors: jest.fn()
}

describe('Header', () => {
  describe('is rendered correctly', () => {
    test('it is semantic', () => {
      render(<Header {...mockProps} />)
  
      const headerElement = screen.getByRole('banner')
  
      expect(headerElement).toBeInTheDocument()
    })
  
    test('it has a heading', () => {
      render(<Header {...mockProps} />)
  
      const heading = screen.getByRole('heading', { level: 1 })
  
      expect(heading).toBeInTheDocument()
    })
  
    test('it has a randomizer button', () => {
      render(<Header {...mockProps} />)
  
      const randomizerButton = screen.getByTitle(/randomize colors/i)  

      expect(randomizerButton).toBeInTheDocument()
    })
  })

  describe('functions as expected', () => {
    test('the randomizer function is called on click', () => {
      render(<Header {...mockProps} />)
  
      const randomizerButton = screen.getByTitle(/randomize colors/i)
      fireEvent.click(randomizerButton)
  
      expect(mockProps.randomizeColors).toHaveBeenCalled()
    })
  })
})