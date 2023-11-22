import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  test('is semantic', () => {
    render(<Header />)

    const headerElement = screen.getByRole('banner')

    expect(headerElement).toBeInTheDocument()
  })

  test('has a heading', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})