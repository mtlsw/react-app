import React from 'react'
import useMediaQuery from 'scripts/hooks/useMediaQuery'
import styled, { css } from 'styled-components'

interface ILayoutContainerProps {
  children?: React.ReactNode
}

export default function LayoutContainer(props: ILayoutContainerProps) {
  const { children } = props
  const mq = useMediaQuery()

  return <Style.Container mq={mq}>{children}</Style.Container>
}

const Style = {
  Container: styled.div<{ mq: IMediaQueryData }>`
    ${({ mq }) =>
      !isNaN(mq.maxWidth) &&
      css`
        margin: 0 auto;
        padding: 0;
        width: 640px;
      `}
  `,
}
