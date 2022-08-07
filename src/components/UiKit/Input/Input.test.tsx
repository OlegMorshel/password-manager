import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Input from './Input'

test('Input focusing and types', async () => {
  let value = ''
  const setValue = (inputValue: string) => {
    value = inputValue
  }
  render(<Input title="input" data-testid="input" value={value} setValue={e => setValue(e.currentTarget.value)} />)
  const input = screen.getByTestId('input')
  userEvent.click(input)
  expect(input).toHaveClass('focused')
  expect(input).toHaveFocus()
  userEvent.keyboard('a')
  expect(value).toBe('a')
  userEvent.click(document.body)
  expect(input).not.toHaveClass('focused')
  expect(input).not.toHaveFocus()
  expect(value).toBe('a')
})
