import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './Pagination.module.scss'

import { ArrowIosBackOutline, ArrowIosForwardOutline } from '../Icons'
import { Select } from './Select'
import { usePagination } from './hooks'

type Props = {
  currentPage: number
  itemsCount: number
  itemsPerPage: ItemsPerPage
  onItemsPerPageChange: (itemsPerPage: ItemsPerPage) => void
  onPageChange: (page: number) => void
}

export type ItemsPerPage = 10 | 20 | 30 | 50 | 100

const ITEMS_PER_PAGE_VALUES = ['10', '20', '30', '50', '100']

export const Pagination = ({
  currentPage,
  itemsCount,
  itemsPerPage,
  onItemsPerPageChange,
  onPageChange,
}: Props) => {
  const { content, isLeftArrowDisabled, isRightArrowDisabled } = usePagination({
    currentPage,
    itemsCount,
    itemsPerPage,
  })

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

  const onItemsPerPageChangeHandler = (itemsPerPage: string) => {
    onItemsPerPageChange(+itemsPerPage as ItemsPerPage)
  }

  return (
    <div className={s.pagination}>
      <button
        className={s.arrows}
        disabled={isLeftArrowDisabled}
        onClick={() => onPageChange(currentPage - 3)}
      >
        <ArrowIosBackOutline
          fill={'var(--color-light-100)'}
          height={16}
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
        <ArrowIosForwardOutline
          fill={'var(--color-light-100)'}
          height={16}
          viewBox={'0 0 24 24'}
          width={16}
        />
      </button>

      <div className={s.itemsPerPage}>
        Show
        <Select onValueChange={onItemsPerPageChangeHandler} options={ITEMS_PER_PAGE_VALUES} />
        per page
      </div>
    </div>
  )
}
