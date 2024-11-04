import * as React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './SelectBox.module.scss'

import { Icon } from '../Icon'

export const Select = ({
  children,
  placeholder,
  portal = true,
  triggerIcon,
  triggerProps = {},
  ...props
}: ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  placeholder?: string
  portal?: boolean
  triggerIcon?: ReactNode
  triggerProps?: Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'children'>
}) => (
  <SelectPrimitive.Root {...props}>
    <SelectTrigger {...triggerProps}>
      <div className={s.triggerLabel}>
        {triggerIcon && triggerIcon}
        <SelectValue placeholder={placeholder} />
      </div>
    </SelectTrigger>
    <SelectContent portal={portal}>{children}</SelectContent>
  </SelectPrimitive.Root>
)

export const SelectGroup = SelectPrimitive.Group
export const SelectValue = SelectPrimitive.Value

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Trigger className={clsx(s.trigger, className)} ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <Icon
        className={s.triggerChevron}
        color={'currentColor'}
        height={24}
        id={'arrow-ios-down-outline'}
        width={24}
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & { portal?: boolean }
>(({ children, className, portal, position = 'popper', ...props }, ref) => (
  <>
    {portal ? (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={clsx(s.content, className)}
          position={position}
          ref={ref}
          {...props}
        >
          <SelectPrimitive.Viewport className={s.viewport}>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    ) : (
      <SelectPrimitive.Content
        className={clsx(s.content, className)}
        position={position}
        ref={ref}
        {...props}
      >
        <SelectPrimitive.Viewport className={s.viewport}>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    )}
  </>
))

SelectContent.displayName = SelectPrimitive.Content.displayName

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label className={className} ref={ref} {...props} />
))

SelectLabel.displayName = SelectPrimitive.Label.displayName

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = SelectPrimitive.Item.displayName
