import React from 'react'
import styled, { css } from 'styled-components'

interface IMenuItemProps {
  children?: React.ReactNode
  onClick?: () => void
}

function MenuItem(props: IMenuItemProps): JSX.Element {
  const { children, onClick } = props

  return (
    <Styled.Component
      onClick={() => {
        onClick && onClick()
      }}
    >
      {children}
    </Styled.Component>
  )
}

const Styled = {
  Component: styled.div`
    padding: 8px;
    cursor: default;
    :hover {
      background-color: ${({ theme }) => theme.color_card_background_hover};
    }
  `,
}

export default MenuItem
