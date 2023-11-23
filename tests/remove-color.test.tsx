import { fireEvent, render, screen } from '@testing-library/react'
import RemoveColor from '@/components/RemoveColor'

const mockColor = {
  hex: '#4C98FB',
  name: 'blue',
  id: 1
}

const mockProps = {
  removeColor: jest.fn(),
  color: mockColor
}

describe('Remove color', () => {
  test('renders a button', () => {
    render(<RemoveColor {...mockProps} />)
  
    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  test('runs the remove function on click', () => {
    render(<RemoveColor {...mockProps} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(mockProps.removeColor).toHaveBeenCalled()
  })
})