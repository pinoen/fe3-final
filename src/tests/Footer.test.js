import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '../Components/Footer'


test('Renders add fav button', () => {
  render(<Footer />)
  const dh = screen.getByText(/powered by/i)
  expect(dh).toBeInTheDocument()
})