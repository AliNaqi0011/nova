import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from '@/components/LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders with default size', () => {
    render(<LoadingSpinner />)
    const spinner = screen.getByRole('status', { hidden: true })
    expect(spinner).toBeInTheDocument()
  })

  it('renders with custom size', () => {
    render(<LoadingSpinner size="lg" />)
    const spinner = screen.getByRole('status', { hidden: true })
    expect(spinner).toHaveClass('w-12', 'h-12')
  })
})