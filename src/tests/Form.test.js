import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../Components/Form'

test('Renders submit button', () => {
  render(<Form />)
  const Button = screen.getByRole("button", {
    name: /submit/i
  })
  expect(Button).toBeInTheDocument()
})

test('Renders the form inputs', () => {
  render(<Form />)
  const inputName = screen.getByLabelText(/enter full name/i)
  const inputEmail = screen.getByLabelText(/enter email/i)
  expect(inputName).toBeInTheDocument()
  expect(inputEmail).toBeInTheDocument()
})

test('Greeting message appears on screen', async () => {
  render(<Form />)
  const inputName = screen.getByLabelText(/enter full name/i)
  const inputEmail = screen.getByLabelText(/enter email/i)

  fireEvent.change(inputName, { target: { value: 'Emilio Pino' } })
  fireEvent.change(inputEmail, { target: { value: 'pinoen@yahoo.com.ar' } })

  fireEvent.click(screen.getByRole("button", { name: /submit/i }))

  const greetingMessage = await screen.findByText(/Thanks Emilio Pino, we'll contact you as soon as possible by email/i)

  expect(greetingMessage).toBeInTheDocument()
})

