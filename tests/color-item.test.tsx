import { screen, render, fireEvent } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import ColorItem from '@/components/ColorItem'

const mockColor = {
  hex: '#4C98FB',
  name: 'blue',
  id: 1
}

const mockProps = {
  color: mockColor,
  add: jest.fn(),
  remove: jest.fn(),
  change: jest.fn(),
}

describe('Color item', () => {
  describe('is rendered correctly', () => {
    test('it exists', () => {
      render(<ColorItem {...mockProps} />)

      const colorItem = screen.getByRole('listitem')

      expect(colorItem).toBeInTheDocument()
    })

    test('it displays the hex code as a button', () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: mockColor.hex })
      const hexButtonText = hexButton.textContent

      expect(hexButton).toBeInTheDocument()
      expect(hexButtonText?.at(0)).toEqual('#')
    })
    
    test('it displays the name of the color as a heading', () => {
      render(<ColorItem {...mockProps} />)

      const nameHeading = screen.getByRole('heading', { level: 3 })

      expect(nameHeading).toBeInTheDocument()
      expect(nameHeading).toHaveTextContent(mockColor.name)
    })

    test('no hex color input is rendered on page load', () => {
      render(<ColorItem {...mockProps} />)

      const hexInput = screen.queryByLabelText('Hex color')

      expect(hexInput).not.toBeInTheDocument()
    })
  })

  describe('functions as expected', () => {
    test('the hex button turns into an input on click', async () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: mockColor.hex })
      await userEvent.click(hexButton)
      
      const hexInput = screen.queryByLabelText('Hex color')

      expect(hexButton).not.toBeInTheDocument()
      expect(hexInput).toBeInTheDocument()
    })

    test('the hex input in focused on render', async () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: mockColor.hex })
      await userEvent.click(hexButton)

      const hexInput = screen.getByLabelText('Hex color')

      expect(hexInput).toHaveFocus()
    })

    test('the change color component is turned back to a button on submit', () => {
      render(<ColorItem {...mockProps} />)

      const newHex = '#24B264'

      const hexButton = screen.getByRole('button', { name: mockColor.hex })
      fireEvent.click(hexButton)

      const form = screen.getByRole('form', { name: 'change-color' })
      fireEvent.submit(form, { fields: { hex: newHex } })

      const newHexButton = screen.getByRole('button', { name: mockColor.hex })

      expect(newHexButton).toBeInTheDocument()
      expect(form).not.toBeInTheDocument()
    })

    test('the change color component is turned back to a button on blur', () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: mockColor.hex })
      fireEvent.click(hexButton)
      
      const hexInput = screen.getByLabelText('Hex color')
      fireEvent.blur(hexInput)
      
      const newlyRenderedHexButton = screen.getByRole('button', { name: mockColor.hex })

      expect(newlyRenderedHexButton).toBeInTheDocument()
      expect(hexInput).not.toBeInTheDocument()
    })
  })
})