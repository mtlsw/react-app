import React from 'react'
import styled, { css } from 'styled-components'

interface ISkeketonProps {
  width?: number
  height?: number
  borderRadius?: number
  paddingTop?: number
  paddingBottom?: number
  marginTop?: number
  marginBottom?: number
}

export default function Skeketon(props: ISkeketonProps): JSX.Element {
  const { borderRadius, ...skeletonProps } = props

  return (
    <Style.Wrapper {...skeletonProps}>
      <Style.Skeketon borderRadius={borderRadius} />
    </Style.Wrapper>
  )
}

const Style = {
  Wrapper: styled.div<ISkeketonProps>`
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;

    ${(props) =>
      props.width &&
      css`
        width: ${props.width}px;
      `}
    ${(props) =>
      props.height &&
      css`
        height: ${props.height}px;
      `} 
    ${(props) =>
      props.paddingTop &&
      css`
        padding-top: ${props.paddingTop}px;
      `}
    ${(props) =>
      props.paddingBottom &&
      css`
        padding-bottom: ${props.paddingBottom}px;
      `}
    ${(props) =>
      props.marginTop &&
      css`
        margin-top: ${props.marginTop}px;
      `}
    ${(props) =>
      props.marginBottom &&
      css`
        margin-bottom: ${props.marginBottom}px;
      `}
  `,

  Skeketon: styled.div<{ borderRadius?: number }>`
    max-width: 600px;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    background-image: linear-gradient(90deg, #7a798a 0px, #8d8d9a 40px, #7a798a 80px);
    background-size: 700px;
    animation: shine-lines 3s infinite linear;
    border-radius: 10px;

    @keyframes shine-lines {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 690px;
      }
    }
    ${(props) =>
      props.borderRadius &&
      css`
        border-radius: ${props.borderRadius}px;
      `}
  `,
}
