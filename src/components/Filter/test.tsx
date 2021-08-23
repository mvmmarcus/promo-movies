import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Filter from '.'

import items from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: ''
}))

describe('<Filter />', () => {
  it('should render headings', () => {
    renderWithTheme(<Filter items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <Filter
        items={items}
        onFilter={jest.fn}
        initialValues={{ genre: ['action'] }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /action/i })).toBeChecked()
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(<Filter items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/action/i))
    userEvent.click(screen.getByLabelText(/romance/i))

    expect(onFilter).toHaveBeenCalledTimes(2)

    expect(onFilter).toBeCalledWith({ genre: ['action'] })
  })
})
