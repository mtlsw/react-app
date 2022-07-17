import React, { useCallback } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import NameAndRegistTime from 'scripts/components/atoms/NameAndRegistTime/NameAndRegistTime'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import Survey from 'scripts/containers/Survey'
import styled from 'styled-components'

interface ISurveyCardProps {
  data: ISurveyData
  onClickCard: (data: ISurveyData) => void
  onClickThumbUp: () => void
  onClickThumbDown: () => void
  onClickShare: () => void
  onClickComment: () => void
}

export default function SurveyCard(props: ISurveyCardProps): JSX.Element {
  const { data, onClickCard, onClickThumbUp, onClickThumbDown, onClickShare, onClickComment } =
    props

  const handleClickCard = useCallback(
    (e) => {
      e.stopPropagation()
      onClickCard(data)
    },
    [data, onClickCard],
  )

  return (
    <Style.Component onClick={handleClickCard}>
      {/* <ProfileThumbnail src={data.thumbnail} size="l" /> */}
      <ProfileThumbnail
        src={
          'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg'
        }
        size="l"
      />
      <Style.Contents>
        <NameAndRegistTime name={data.user.name} date={data.created} />
        <Style.DetailWrapper>{data.contents}</Style.DetailWrapper>
        <Survey votes={data.votes} voted={data.currentUserVote} />
        <Style.ButtonWrapper>
          <IconButton icon="thumbUp" onClick={onClickThumbUp} /> {data.likeCount}
          <IconButton icon="thumbDown" onClick={onClickThumbDown} />
          <IconButton icon="share" onClick={onClickShare} />
          <IconButton icon="comment" onClick={onClickComment} /> {data.commentCount}
        </Style.ButtonWrapper>
      </Style.Contents>
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    display: flex;
    margin: 5px;
    padding: 16px;
    gap: 16px;
    background-color: ${({ theme }) => theme.color_card_background};
    border: 1px solid ${({ theme }) => theme.color_card_border};
    box-shadow: 0.5px 0.5px 5px 0.5px ${({ theme }) => theme.color_background};
    border-radius: 10px;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.color_card_background_hover};
      border: 1px solid ${({ theme }) => theme.color_card_border_hover};
    }
  `,
  Contents: styled.div`
    flex-grow: 1;
  `,
  HeaderWrapper: styled.div``,
  DetailWrapper: styled.div`
    margin: 5px 0;
    font-size: 1rem;
    white-space: pre-wrap;
  `,
  VoteCount: styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color_text_dark};
    margin: 5px 0;
  `,
  Vote: styled.div``,
  ButtonWrapper: styled.div`
    display: flex;
    margin-top: 16px;
    font-size: 0.9rem;
    align-items: center;
    color: ${({ theme }) => theme.color_text_dark};
    line-height: 26px;
  `,
}
