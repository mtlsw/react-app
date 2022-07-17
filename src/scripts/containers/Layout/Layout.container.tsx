import React from 'react'
import useMediaQuery from 'scripts/hooks/useMediaQuery'
import styled from 'styled-components'

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
    margin: 0 auto;
    max-width: 40rem;
    padding: 0;
  `,
}
