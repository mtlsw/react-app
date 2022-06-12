import React, { useCallback, useState } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import styled, { css } from 'styled-components'

interface INestedCommentCardProps {
  data: INestedCommentData
  onClickThumbUp: () => void
  onClickThumbDown: () => void
}

export default function NestedCommentCard(props: INestedCommentCardProps): JSX.Element {
  const { data, onClickThumbUp, onClickThumbDown } = props

  return (
    <Style.Component>
      <ProfileThumbnail
        src={
          'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg'
        }
        size="s"
      />
      <Style.Contents>
        <Style.HeaderWrapper>
          {data.user.name}
          {new Date(data.created).toLocaleDateString()}
        </Style.HeaderWrapper>
        <Style.DetailWrapper>{data.contents}</Style.DetailWrapper>
        <Style.buttonWrapper>
          <IconButton icon="thumbUp" onClick={onClickThumbUp} /> {data.likeCount}
          <IconButton icon="thumbDown" onClick={onClickThumbDown} />
        </Style.buttonWrapper>
      </Style.Contents>
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    display: flex;
    gap: 16px;
  `,
  Contents: styled.div`
    flex-grow: 1;
  `,
  HeaderWrapper: styled.div`
    margin-bottom: 2px;
  `,
  DetailWrapper: styled.div``,
  VoteCount: styled.div``,
  Vote: styled.div``,
  buttonWrapper: styled.div`
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    color: ${({ theme }) => theme.color_text_dark};
  `,
}
