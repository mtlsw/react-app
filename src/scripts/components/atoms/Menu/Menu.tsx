import React from 'react'
import styled, { css } from 'styled-components'
import MenuItem from './MenuItem'

interface IMenuProps {
  children?: React.ReactNode | React.ReactNode[]
}

function Menu(props: IMenuProps): JSX.Element {
  const { children } = props

  return <Styled.Component>{children}</Styled.Component>
}

const Styled = {
  Component: styled.div``,
}

Menu.MenuItem = MenuItem

export default Menu
