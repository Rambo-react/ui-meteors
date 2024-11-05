type Props = {
  currentPage: number
  itemsCount: number
  itemsPerPage: number
}

export const usePagination = ({ currentPage, itemsCount, itemsPerPage }: Props) => {
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

  const notIncludeTwoStrings = content.filter(v => v === '...').length !== 2

  const isLeftArrowDisabled = currentPage - 3 < 1 && notIncludeTwoStrings
  const isRightArrowDisabled = currentPage + 3 > pages && notIncludeTwoStrings

  return {
    content,
    isLeftArrowDisabled,
    isRightArrowDisabled,
  }
}
