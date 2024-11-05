import { ReactNode } from 'react'
import { Button, Icon } from '..'
import s from './Modal.module.scss'

type Props = {
  title: string
  buttons: string[]
  children?: ReactNode
  firstBtnHandler: () => void
  secondBtnHandler?: () => void
}

export const Modal = ({ buttons, title, children, firstBtnHandler, secondBtnHandler }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.head}>
        <p>{title}</p>
        <button>
          <Icon id="close" color="white" width={24} height={24}></Icon>
        </button>
      </div>
      <div className={s.main}>
        <p>{children}</p>
        <div className={s.btnContainer}>
          {buttons.map((b, i) =>
            i >= 1 ? (
              <Button onClick={secondBtnHandler} variant="outline">
                {b}
              </Button>
            ) : (
              <Button onClick={firstBtnHandler} variant="primary">
                {b}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  )
}
