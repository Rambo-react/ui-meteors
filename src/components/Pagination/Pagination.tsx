import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './Pagination.module.scss'

import { Icon } from '../Icon'
import { Select } from './Select'

export type PaginationProps = {
  currentPage: number
  itemsCount: number
  itemsPerPage: ItemsPerPage
  onItemsPerPageChange: (itemsPerPage: ItemsPerPage) => void
  onPageChange: (page: number) => void
}

export type ItemsPerPage = 10 | 20 | 30 | 50 | 100

const itemsPerPageValues = ['10', '20', '30', '50', '100']

export const Pagination = (props: PaginationProps) => {
  const { currentPage, itemsCount, itemsPerPage, onItemsPerPageChange, onPageChange } = props

  const onItemsPerPageChangeHandler = (itemsPerPage: string) => {
    onItemsPerPageChange(+itemsPerPage as ItemsPerPage)
  }

  const pages = Math.ceil(itemsCount / itemsPerPage)
  let content: (number | string)[]

  if (pages < 7) {
    content = Array.from({ length: pages }, (_, i) => i + 1)
  } else if (currentPage < 3) {
    content = [1, 2, 3, 4, 5, '...', pages]
  } else if (currentPage === 3) {
    content = [1, 2, 3, 4, 5, '...', pages]
  } else if (currentPage > pages - 2) {
    content = [1, '...', pages - 2, pages - 1, pages]
  } else if (currentPage === pages - 2) {
    content = [1, '...', pages - 3, pages - 2, pages - 1, pages]
  } else {
    content = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', pages]
  }

  const mappedContent = content.map((v, i) => {
    const props: ComponentPropsWithoutRef<'span'> =
      typeof v === 'number'
        ? {
            children: v,
            className: clsx(s.contentItem, {
              [s.selected]: v === currentPage,
            }),
            onClick() {
              onPageChange(v)
            },
          }
        : {
            children: v,
          }

    return <span key={`${v}${i}`} {...props} />
  })

  const notIncludeTwoStrings = content.filter(v => v === '...').length !== 2

  const isLeftArrowDisabled = currentPage - 3 < 1 && notIncludeTwoStrings
  const isRightArrowDisabled = currentPage + 3 > pages && notIncludeTwoStrings

  return (
    <div className={s.pagination}>
      <button
        className={s.arrows}
        disabled={isLeftArrowDisabled}
        onClick={() => onPageChange(currentPage - 3)}
      >
        <Icon
          fill={'var(--color-light-100)'}
          height={16}
          id={'arrow-ios-back-outline'}
          viewBox={'0 0 24 24'}
          width={16}
        />
      </button>

      {mappedContent}

      <button
        className={s.arrows}
        disabled={isRightArrowDisabled}
        onClick={() => onPageChange(currentPage + 3)}
      >
        <Icon
          fill={'var(--color-light-100)'}
          height={16}
          id={'arrow-ios-forward-outline'}
          viewBox={'0 0 24 24'}
          width={16}
        />
      </button>

      <div className={s.itemsPerPage}>
        Show
        <Select onValueChange={onItemsPerPageChangeHandler} options={itemsPerPageValues} />
        per page
      </div>
    </div>
  )
}
