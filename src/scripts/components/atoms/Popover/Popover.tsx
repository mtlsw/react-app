import React, { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

interface IPopoverProps {
  children?: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  closeBackgroundClick?: boolean
}

export default function Popover(props: IPopoverProps): JSX.Element {
  const { children, isOpen = false, onClose, closeBackgroundClick = false } = props

  const backgroundClickHandler = useCallback(() => {
    if (closeBackgroundClick) {
      onClose && onClose()
    }
  }, [closeBackgroundClick, onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', backgroundClickHandler)
    }
    return () => {
      document.removeEventListener('click', backgroundClickHandler)
    }
  }, [isOpen])

  return (
    <Styled.Component
      onClick={(e) => {
        e.stopPropagation()
      }}
      isOpen={isOpen}
    >
      <div>{children}</div>
    </Styled.Component>
  )
}

const Styled = {
  Component: styled.div<{ isOpen: boolean }>`
    position: absolute;
    right: 0;
    top: 100%;
    display: inline-block;
    height: 0;
    overflow: hidden;
    white-space: pre;

    > div {
      padding: 16px;
      background-color: ${({ theme }) => theme.color_card_background};
      border: 1px solid ${({ theme }) => theme.color_card_border_hover};
      border-radius: 4px;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        height: auto;
      `}
  `,
}
