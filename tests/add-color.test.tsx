import { render, screen } from '@testing-library/react'
import AddColor from '@/components/AddColor'

const mockProps = {
  addRandomColor: jest.fn()
}

describe('Add color', () => {
  test('renders a button', () => {
    render(<AddColor {...mockProps} />)
  
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})