import { render, screen } from "@testing-library/react"
import Contact from '../Routes/Contact'
import '@testing-library/jest-dom'


test('render title message', () => {
  render(<Contact />);
  const title = screen.getByText(/want to know more/i);
  expect(title).toBeInTheDocument()
})