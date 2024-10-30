'use client'

import * as React from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './SelectBox.module.scss'

import { Icon } from '../Icon'

const SelectBox = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Trigger className={clsx(s.trigger, className)} ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <Icon color={'white'} height={24} id={'arrow-ios-down-outline'} width={24} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    'data-state'?: 'closed' | 'open'
  }
>(({ children, className, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={clsx(
        s.content,
        className,
        {
          [s.closed]: props['data-state'] === 'closed',
          [s.open]: props['data-state'] === 'open',
        },
        position === 'popper' && {
          [s.popper]: true,
        }
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={clsx(s.viewport, position === 'popper' && s.popperViewport)}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))

SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label className={clsx(s.label, className)} ref={ref} {...props} />
))

SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item className={clsx(s.item, className)} ref={ref} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator className={clsx(s.separator, className)} ref={ref} {...props} />
))

SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  SelectBox,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
