import { screen, render, fireEvent } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import ColorItem from '@/components/ColorItem'
import { hexcolorRegex, mockColor } from './utils'

const mockProps = {
  color: mockColor,
  addRandomColor: jest.fn(),
  removeColor: jest.fn(),
  changeColor: jest.fn(),
  isLastColor: false,
  amountOfColors: 5
}

describe('Color item', () => {
  describe('is rendered correctly', () => {
    test('it is a list item', () => {
      render(<ColorItem {...mockProps} />)

      const colorItem = screen.getByRole('listitem')

      expect(colorItem).toBeInTheDocument()
    })

    test('it displays the hex code as a button', () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: mockColor.hex })

      expect(hexButton).toBeInTheDocument()
      expect(hexButton.textContent).toMatch(hexcolorRegex)
    })
    
    test('it displays the name of the color as a heading', () => {
      render(<ColorItem {...mockProps} />)

      const nameHeading = screen.getByRole('heading')

      expect(nameHeading).toBeInTheDocument()
      expect(nameHeading).toHaveTextContent(mockColor.name)
    })

    test('no hex color input is rendered on page load', () => {
      render(<ColorItem {...mockProps} />)

      const hexInput = screen.queryByLabelText('Hex color')

      expect(hexInput).not.toBeInTheDocument()
    })

    test('the hex code is always displayed with seven characters', () => {
      const { color, ...rest } = mockProps
      const colorWithShortHex = {
        hex: '#FFF',
        name: 'white',
      }

      render(
        <ColorItem
          color={colorWithShortHex}
          {...rest}
        />
      )

      const hexButton = screen.getByRole('button', { name: hexcolorRegex })

      expect(hexButton.textContent).toMatch(hexcolorRegex)

    })
  })

  describe('functions as expected', () => {
    test('the hex button turns into an input on click', () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: hexcolorRegex })
      fireEvent.click(hexButton)
      
      const hexInput = screen.queryByLabelText(/hex color/i)

      expect(hexButton).not.toBeInTheDocument()
      expect(hexInput).toBeInTheDocument()
    })

    test('the hex input in focused on render', async () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: hexcolorRegex })
      await userEvent.click(hexButton)

      const hexInput = screen.queryByLabelText(/hex color/i)

      expect(hexInput).toHaveFocus()
    })

    test('the change color component is turned back to a button on submit', () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: hexcolorRegex })
      fireEvent.click(hexButton)

      const form = screen.getByRole('form', { name: 'change-color' })
      fireEvent.submit(form)

      const rerenderedHexButton = screen.getByRole('button', { name: hexcolorRegex })

      expect(rerenderedHexButton).toBeInTheDocument()
      expect(form).not.toBeInTheDocument()
    })

    test('the change color component is turned back to a button on blur', () => {
      render(<ColorItem {...mockProps} />)

      const hexButton = screen.getByRole('button', { name: hexcolorRegex })
      fireEvent.click(hexButton)
      
      const hexInput = screen.getByLabelText(/hex color/i)
      fireEvent.blur(hexInput)
      
      const rerenderedHexButton = screen.getByRole('button', { name: hexcolorRegex })

      expect(rerenderedHexButton).toBeInTheDocument()
      expect(hexInput).not.toBeInTheDocument()
    })
  })
})