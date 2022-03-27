import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as IconSearch } from 'resources/assets/svg/icon-search.svg'
import { ReactComponent as IconAlarmOn } from 'resources/assets/svg/icon-alarm-on.svg'
import { ReactComponent as IconAlarmOff } from 'resources/assets/svg/icon-alarm-off.svg'
import { ReactComponent as IconThumbUp } from 'resources/assets/svg/icon-thumbs-up.svg'
import { ReactComponent as IconThumbUpFilled } from 'resources/assets/svg/icon-thumbs-up-filled.svg'
import { ReactComponent as IconThumbDown } from 'resources/assets/svg/icon-thumbs-down.svg'
import { ReactComponent as IconThumbDownFilled } from 'resources/assets/svg/icon-thumbs-down-filled.svg'
import { ReactComponent as IconShare } from 'resources/assets/svg/icon-share.svg'
import { ReactComponent as IconComment } from 'resources/assets/svg/icon-comment.svg'

interface IIconButtonProps {
  icon:
    | 'search'
    | 'alarmOn'
    | 'alarmOff'
    | 'thumbUp'
    | 'thumbUpFilled'
    | 'thumbDown'
    | 'thumbDownFilled'
    | 'share'
    | 'comment'
  onClick: () => void
}

export default React.memo(function IconButton(props: IIconButtonProps): JSX.Element {
  const { icon, onClick } = props

  return (
    <Style.Component onClick={onClick}>
      {icon === 'search' && <IconSearch />}
      {icon === 'alarmOn' && <IconAlarmOn />}
      {icon === 'alarmOff' && <IconAlarmOff />}
      {icon === 'thumbUp' && <IconThumbUp />}
      {icon === 'thumbUpFilled' && <IconThumbUpFilled />}
      {icon === 'thumbDown' && <IconThumbDown />}
      {icon === 'thumbDownFilled' && <IconThumbDownFilled />}
      {icon === 'share' && <IconShare />}
      {icon === 'comment' && <IconComment />}
    </Style.Component>
  )
})

const Style = {
  Component: styled.button`
    padding: 5px;

    svg {
      height: 20px;
      width: 20px;
    }
  `,
}
