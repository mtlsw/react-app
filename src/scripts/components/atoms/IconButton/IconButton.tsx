import React, { useCallback } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconSearch } from 'resources/assets/svg/icon-search.svg'
import { ReactComponent as IconAlarmOn } from 'resources/assets/svg/icon-alarm-on.svg'
import { ReactComponent as IconAlarmOff } from 'resources/assets/svg/icon-alarm-off.svg'
import { ReactComponent as IconArrowLeft } from 'resources/assets/svg/icon-angle-left.svg'
import { ReactComponent as IconThumbUp } from 'resources/assets/svg/icon-thumbs-up.svg'
import { ReactComponent as IconThumbUpFilled } from 'resources/assets/svg/icon-thumbs-up-filled.svg'
import { ReactComponent as IconThumbDown } from 'resources/assets/svg/icon-thumbs-down.svg'
import { ReactComponent as IconThumbDownFilled } from 'resources/assets/svg/icon-thumbs-down-filled.svg'
import { ReactComponent as IconShare } from 'resources/assets/svg/icon-share.svg'
import { ReactComponent as IconComment } from 'resources/assets/svg/icon-comment.svg'
import { ReactComponent as IconUser } from 'resources/assets/svg/icon-user.svg'

interface IIconButtonProps {
  icon:
    | 'search'
    | 'alarmOn'
    | 'alarmOff'
    | 'arrowLeft'
    | 'arrowRight'
    | 'arrowUp'
    | 'arrowDown'
    | 'thumbUp'
    | 'thumbUpFilled'
    | 'thumbDown'
    | 'thumbDownFilled'
    | 'share'
    | 'comment'
    | 'user'
  onClick: () => void
}

export default React.memo(function IconButton(props: IIconButtonProps): JSX.Element {
  const { icon, onClick } = props

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation()
      onClick()
    },
    [onClick],
  )

  return (
    <Style.Component onClick={handleClick}>
      {icon === 'search' && <IconSearch />}
      {icon === 'alarmOn' && <IconAlarmOn />}
      {icon === 'alarmOff' && <IconAlarmOff />}
      {icon === 'arrowLeft' && <IconArrowLeft />}
      {icon === 'arrowRight' && <IconArrowLeft style={{ transform: `rotate(180deg)` }} />}
      {icon === 'arrowUp' && <IconArrowLeft style={{ transform: `rotate(90deg)` }} />}
      {icon === 'arrowDown' && <IconArrowLeft style={{ transform: `rotate(270deg)` }} />}
      {icon === 'thumbUp' && <IconThumbUp />}
      {icon === 'thumbUpFilled' && <IconThumbUpFilled />}
      {icon === 'thumbDown' && <IconThumbDown />}
      {icon === 'thumbDownFilled' && <IconThumbDownFilled />}
      {icon === 'share' && <IconShare />}
      {icon === 'comment' && <IconComment />}
      {icon === 'user' && <IconUser />}
    </Style.Component>
  )
})

const Style = {
  Component: styled.button`
    display: flex;
    height: 2rem;
    width: 2rem;
    align-items: center;
    justify-content: center;
    outline: none;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 9999px;

    svg {
      height: 1rem;
      width: 1rem;

      fill: ${({ theme }) => theme.color_text_dark};
    }

    :hover {
      svg {
        fill: ${({ theme }) => theme.color_text};
      }
    }
  `,
}
