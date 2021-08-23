import Pagination from 'react-js-pagination'
import { NavigateNext, NavigateBefore } from '@styled-icons/material'

import * as S from './styles'

export type PaginateProps = {
  initialPage?: number
  totalResults: number
  onPaginate: (selected: number) => void
}

const Paginate = ({
  onPaginate,
  initialPage = 1,
  totalResults
}: PaginateProps) => {
  return (
    <S.Wrapper>
      <Pagination
        activePage={initialPage || 1}
        prevPageText={<NavigateBefore aria-label="prev icon" size={20} />}
        nextPageText={<NavigateNext aria-label="next icon" size={20} />}
        totalItemsCount={totalResults}
        itemsCountPerPage={20}
        pageRangeDisplayed={2}
        onChange={onPaginate}
      />
    </S.Wrapper>
  )
}

export default Paginate
