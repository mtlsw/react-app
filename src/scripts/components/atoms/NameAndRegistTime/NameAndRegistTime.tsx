import React from 'react'
import styled, { css } from 'styled-components'

interface ILinearBarProps {
  name: string
  date: Date
}

export default function LinearBar(props: ILinearBarProps): JSX.Element {
  const { name, date } = props

  return (
    <Style.Component>
      {name}
      <Style.Date>{date.toLocaleDateString()}</Style.Date>
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    display: flex;
    gap: 5px;
    align-items: baseline;
  `,
  Date: styled.div`
    color: ${({ theme }) => theme.color_text_dark};
    font-size: 0.9rem;
  `,
}
