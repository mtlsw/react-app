import React from 'react'
import styled, { css } from 'styled-components'

interface IProfileThumbnailProps {
  src: string
  size: 'l' | 'm' | 's'
}

export default function ProfileThumbnail(props: IProfileThumbnailProps): JSX.Element {
  return <Styled.Component {...props} alt="thumbnail" />
}

const Styled = {
  Component: styled.img<{ size: 'l' | 'm' | 's' }>`
    border-radius: 50%;

    ${({ size }) =>
      size === 'l'
        ? css`
            height: 48px;
            width: 48px;
          `
        : size === 'm'
        ? css`
            height: 40px;
            width: 40px;
          `
        : css`
            height: 24px;
            width: 24px;
          `}
  `,
}
