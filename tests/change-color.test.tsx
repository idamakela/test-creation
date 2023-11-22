import { screen, render, fireEvent } from '@testing-library/react'
import ChangeColor from '@/components/ChangeColor'

const mockColor = {
  hex: '#4C98FB',
  name: 'blue',
  id: 1
}

const mockProps = {
  color: mockColor,
  inputRef: null,
  change: jest.fn(),
  disableEditing: jest.fn()
}

describe('Change color', () => {
  describe('is rendered correctly', () => {
    test('it has an input', () => {
      render(<ChangeColor {...mockProps} />)

      const input = screen.getByLabelText('Hex color')

      expect(input).toBeInTheDocument()
    })

    test('it has a form', () => {
      render(<ChangeColor {...mockProps} />)

      const form = screen.getByRole('form', { name: 'change-color' })

      expect(form).toBeInTheDocument()
    })

    test('it has a hidden label', () => {
      render(<ChangeColor {...mockProps} />)

      const label = screen.getByText('Hex color')

      expect(label).toBeInTheDocument()
      expect(label.hidden).toBeTruthy()
    })
  })

  describe('functions as expected', () => {
    test('the value of the input updates', () => {
      render(<ChangeColor {...mockProps} />)

      const newHex = '#24B264'
      const input: HTMLInputElement = screen.getByLabelText('Hex color')

      expect(input.value).not.toEqual(newHex)

      fireEvent.change(input, { target: { value: newHex } })

      expect(input.value).toEqual(newHex)
    })

    test('the change function runs on submit', () => {
      render(<ChangeColor {...mockProps} />)

      const form = screen.getByRole('form', { name: 'change-color' })

      fireEvent.submit(form)

      expect(mockProps.change).toHaveBeenCalled()
    })
  })
})