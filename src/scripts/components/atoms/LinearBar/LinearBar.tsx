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
    padding: 3px;
    border: 1px solid black;
    border-radius: 5px;
  `,
  InnerWrapper: styled.div`
    position: relative;
  `,
  Bar: styled.div<{ width: number }>`
    height: 30px;
    max-width: 100%;
    border-radius: 5px;
    transition: width 0.3s ease-in-out;
    background-color: blueviolet;
    ${({ width }) =>
      css`
        width: ${width}%;
      `};
  `,
  Label: styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
}
