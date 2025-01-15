import { useState } from 'react'

import { Modal, ModalProps } from '../Modal'

type Props = Omit<ModalProps, 'onClose'>

export const StoryTemplate = ({ children, customHeader, isOpen, title }: Props) => {
  const [open, setOpen] = useState(isOpen)

  const onClickHandler = () => {
    setOpen(!open)
  }

  return (
    <Modal customHeader={customHeader} isOpen={open} onClose={onClickHandler} title={title}>
      {children}
    </Modal>
  )
}
