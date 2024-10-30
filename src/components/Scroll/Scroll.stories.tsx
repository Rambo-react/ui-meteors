import { Meta, StoryObj } from '@storybook/react'

import { ScrollAreaComponent } from './Scroll'

const meta = {
  component: ScrollAreaComponent,
  tags: ['autodocs'],
  title: 'Components/ScrollArea',
} satisfies Meta<typeof ScrollAreaComponent>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultWithoutScrollbar: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
  },
}

export const HorizontalScrollbar: Story = {
  args: {
    children: (
      <div style={{ height: '150px', width: '1000px' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
          earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
          Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
          perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
          iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
          tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
        </p>
      </div>
    ),
    styles: {
      height: '170px',
      width: '400px',
    },
  },
}

export const VerticalScrollbar: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, autem, beatae debitis,
        earum maiores nam omnis perspiciatis quas quasi ratione tenetur voluptas voluptatem!
        Blanditiis ducimus, excepturi iste iure quos veritatis. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci, autem, beatae debitis, earum maiores nam omnis
        perspiciatis quas quasi ratione tenetur voluptas voluptatem! Blanditiis ducimus, excepturi
        iste iure quos veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci, autem, beatae debitis, earum maiores nam omnis perspiciatis quas quasi ratione
        tenetur voluptas voluptatem! Blanditiis ducimus, excepturi iste iure quos veritatis.
      </p>
    ),
    styles: {
      height: '170px',
      width: '400px',
    },
  },
}
