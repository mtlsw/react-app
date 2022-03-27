import React from 'react'
import styled, { css } from 'styled-components'

interface ILinearBarProps {
  value: number
  max?: number
}

export default function LinearBar(props: ILinearBarProps): JSX.Element {
  const { value, max = 100 } = props

  return <StyledLinearBar>LinearBar</StyledLinearBar>
}

const StyledLinearBar = styled.div``
