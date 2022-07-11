import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import Popover from '../Popover'

interface IProfileThumbnailProps {
  src?: string
  size: 'l' | 'm' | 's'
  popover?: React.ReactNode
}

export default function ProfileThumbnail(props: IProfileThumbnailProps): JSX.Element {
  const { src, size, popover } = props

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const handleClick = useCallback(() => {
    console.log('click')
    if (!!popover) {
      setIsPopoverOpen(!isPopoverOpen)
    }
  }, [isPopoverOpen])

  return (
    <Styled.Component>
      <Styled.ProfileImage
        src={src || ''}
        alt="thumbnail"
        size={size}
        clickable={!!popover}
        onClick={handleClick}
      />
      <Popover
        isOpen={isPopoverOpen}
        closeBackgroundClick
        onClose={() => {
          setIsPopoverOpen(false)
        }}
      >
        {popover}
      </Popover>
    </Styled.Component>
  )
}

const Styled = {
  Component: styled.div`
    position: relative;
  `,
  ProfileImage: styled.img<{ size: 'l' | 'm' | 's'; clickable: boolean }>`
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

    ${({ clickable }) =>
      clickable &&
      css`
        cursor: pointer;
      `}
  `,
}
