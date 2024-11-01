import type { Meta, StoryObj } from '@storybook/react'

import { useEffect, useState } from 'react'

import { ItemsPerPage, Pagination } from './Pagination'

const meta = {
  argTypes: {
    currentPage: {
      description: 'Allows you to select current page',
    },
    itemsCount: {
      description: 'Allows you to set total number of items',
    },
    itemsPerPage: {
      description: 'Allows you to select items per page',
    },
    onItemsPerPageChange: {
      description: 'Callback function to get items per page after it has changed',
    },
    onPageChange: {
      description: 'Callback function to get current page after it has changed',
    },
  },
  args: {
    currentPage: 3,
    itemsCount: 510,
    itemsPerPage: 20,
    onItemsPerPageChange(itemsPerPage: ItemsPerPage) {
      alert(itemsPerPage)
    },
    onPageChange(page: number) {
      alert(page)
    },
  },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

// stories
export const BasicExample: Story = {
  render(args) {
    const [page, setPage] = useState(args.currentPage)
    const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(args.itemsPerPage)

    useEffect(() => {
      setPage(args.currentPage)
      setItemsPerPage(args.itemsPerPage)
    }, [args.currentPage, args.itemsPerPage])

    return (
      <Pagination
        {...args}
        currentPage={page}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        onPageChange={setPage}
      />
    )
  },
}
