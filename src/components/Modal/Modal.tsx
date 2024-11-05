import { ReactNode } from 'react'
import { Button, Icon } from '..'
import s from './Modal.module.scss'
import clsx from 'clsx'

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
          <Icon id="close" width={25} height={25} fill="white" />
        </button>
      </div>
      <div className={s.main}>
        {children}
        <div
          className={clsx(s.btnContainer, {
            [s.oneButton]: buttons.length === 1,
            [s.moreButtons]: buttons.length > 1,
          })}
        >
          {buttons.map((button, index) =>
            index >= 1 ? (
              <Button onClick={secondBtnHandler} variant="outline">
                {button}
              </Button>
            ) : (
              <Button onClick={firstBtnHandler} variant="primary">
                {button}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  )
}
