import React from 'react'
import styled, { css } from 'styled-components'

interface IProfileThumbnailProps {
  src: string
  size: 'l' | 'm' | 's'
}

export default function ProfileThumbnail(props: IProfileThumbnailProps): JSX.Element {
  const { src, size } = props

  return <Styled.Component src={src} alt="thumbnail" size={size} />
}

const Styled = {
  Component: styled.img<{ size: 'l' | 'm' | 's' }>`
    border-radius: 50%;
    overflow: hidden;

    ${({ size }) =>
      size === 'l'
        ? css`
            height: 48px;
            min-width: 48px;
          `
        : size === 'm'
        ? css`
            height: 40px;
            min-width: 40px;
          `
        : css`
            height: 24px;
            min-width: 24px;
          `}
  `,
}
