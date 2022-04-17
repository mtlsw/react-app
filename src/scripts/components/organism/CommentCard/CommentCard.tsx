import React, { useCallback, useState } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import styled, { css } from 'styled-components'

interface ICommentCardProps {
  data: ICommentData
  onClickCard: (data: ICommentData) => void
  onClickThumbUp: () => void
  onClickThumbDown: () => void
  onClickComment: () => void
}

export default function CommentCard(props: ICommentCardProps): JSX.Element {
  const { data, onClickCard, onClickThumbUp, onClickThumbDown, onClickComment } = props

  const handleClickCard = useCallback(() => {
    onClickCard(data)
  }, [onClickCard])

  return (
    <Style.Component onClick={handleClickCard}>
      <ProfileThumbnail src={data.thumbnail} size="m" />
      <Style.Contents>
        <Style.HeaderWrapper>
          {data.userName}
          {data.registDate.toLocaleDateString()}
        </Style.HeaderWrapper>
        <Style.DetailWrapper>{data.contents}</Style.DetailWrapper>
        <Style.buttonWrapper>
          <IconButton icon="thumbUp" onClick={onClickThumbUp} /> {data.thumbUpCount}
          <IconButton icon="thumbDown" onClick={onClickThumbDown} />
          <IconButton icon="comment" onClick={onClickComment} /> {data.commentCount}
        </Style.buttonWrapper>
      </Style.Contents>
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    display: flex;
    margin: 5px;
    padding: 20px;
    background-color: ${({ theme }) => theme.color_card_background};
    border: 1px solid ${({ theme }) => theme.color_card_border};
    border-radius: 10px;
    :hover {
      background-color: ${({ theme }) => theme.color_card_background_hover};
    }
  `,
  Contents: styled.div`
    flex-grow: 1;
  `,
  HeaderWrapper: styled.div``,
  DetailWrapper: styled.div``,
  VoteCount: styled.div``,
  Vote: styled.div``,
  buttonWrapper: styled.div``,
}
