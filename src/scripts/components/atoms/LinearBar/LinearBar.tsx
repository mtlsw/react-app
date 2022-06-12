import React from 'react'
import styled, { css } from 'styled-components'

interface ILinearBarProps {
  label: string
  value: number
}

export default function LinearBar(props: ILinearBarProps): JSX.Element {
  const { label, value } = props

  return (
    <Style.Component>
      <Style.InnerWrapper>
        <Style.Bar width={value} />
        <Style.Label>{label}</Style.Label>
      </Style.InnerWrapper>
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    width: 100%;
    padding: 2px;
    border: 1px solid ${({ theme }) => theme.color_card_border_hover};
    border-radius: 5px;
  `,
  InnerWrapper: styled.div`
    position: relative;
  `,
  Bar: styled.div<{ width: number }>`
    height: 22px;
    max-width: 100%;
    border-radius: 3px;
    transition: width 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.color_primary};
    ${({ width }) =>
      css`
        width: ${width}%;
      `};
  `,
  Label: styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 10px;
    line-height: 18px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
}
