import React from 'react'
import styled, { css } from 'styled-components'

interface IProfileThumbnailProps {
  src: string
}

export default function ProfileThumbnail(props: IProfileThumbnailProps): JSX.Element {
  const { src } = props

  return (
    <Styled.Component>
      <img src={src} alt="thumbnail" />
    </Styled.Component>
  )
}

const Styled = {
  Component: styled.div`
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
  `,
}
