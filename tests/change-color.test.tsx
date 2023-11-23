import { screen, render, fireEvent } from '@testing-library/react'
import ChangeColor from '@/components/ChangeColor'
import { mockColor, mockHex } from './utils'

const mockProps = {
  color: mockColor,
  changeColor: jest.fn(),
  disableEditing: jest.fn(),
  inputRef: null
}

describe('Change color', () => {
  describe('is rendered correctly', () => {
    test('it has an input', () => {
      render(<ChangeColor {...mockProps} />)

      const input = screen.getByLabelText(/hex color/i)

      expect(input).toBeInTheDocument()
    })

    test('it has a form', () => {
      render(<ChangeColor {...mockProps} />)

      const form = screen.getByRole('form', { name: 'change-color' })

      expect(form).toBeInTheDocument()
    })

    test('it has a hidden label', () => {
      render(<ChangeColor {...mockProps} />)

      const label = screen.getByText(/hex color/i)

      expect(label).toBeInTheDocument()
      expect(label.hidden).toBeTruthy()
    })
  })

  describe('functions as expected', () => {
    test('the value of the input updates', () => {
      render(<ChangeColor {...mockProps} />)

      const input: HTMLInputElement = screen.getByLabelText(/hex color/i)
      fireEvent.change(input, { target: { value: mockHex } })

      expect(input.value).toEqual(mockHex)
    })
  })
})