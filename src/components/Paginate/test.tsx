import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Paginate from '.'

describe('<Paginate />', () => {
  it('should render the paginate correctly', () => {
    renderWithTheme(<Paginate onPaginate={jest.fn} totalResults={40} />)

    expect(screen.getByLabelText(/prev icon/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next icon/i)).toBeInTheDocument()
  })

  it('should initialize with page 1 by default', () => {
    renderWithTheme(
      <Paginate totalResults={500} initialPage={1} onPaginate={jest.fn} />
    )

    expect(
      screen.getByLabelText(/Go to page number 1/i).parentElement
    ).toHaveClass('active')
  })

  it('should disable previous button', () => {
    renderWithTheme(<Paginate totalResults={80} onPaginate={jest.fn} />)

    userEvent.click(screen.getByLabelText(/Go to page number 1/i))
    expect(
      screen.getByLabelText(/Go to previous page/i).parentElement
    ).toHaveClass('disabled')
  })

  it('should paginate when click', async () => {
    const onFilter = jest.fn()

    renderWithTheme(<Paginate totalResults={40} onPaginate={onFilter} />)

    userEvent.click(screen.getByLabelText(/Go to page number 1/i))

    expect(onFilter).toHaveBeenCalledTimes(1)
  })
})
