import React, { useCallback, useEffect, useMemo, useState } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import NameAndRegistTime from 'scripts/components/atoms/NameAndRegistTime/NameAndRegistTime'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import SurveyResult from 'scripts/components/molecule/SurveyResult'
import styled, { css } from 'styled-components'

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

  const [checkedIndex, setCheckedIndex] = useState<number>()

  useEffect(() => {
    console.log('check ', checkedIndex)
  }, [checkedIndex])

  const handleClickCard = useCallback(
    (e) => {
      e.stopPropagation()
      onClickCard(data)
    },
    [onClickCard],
  )

  const voteCount = useMemo(() => {
    return data.votes.reduce((acc, obj) => {
      return acc + (obj.voted || 0)
    }, 0)
  }, [data])

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
        <Style.VoteCount>{voteCount}명 투표</Style.VoteCount>
        <Style.Vote>
          <SurveyResult selected={checkedIndex} onChange={setCheckedIndex} data={data.votes} />
        </Style.Vote>
        <Style.buttonWrapper>
          <IconButton icon="thumbUp" onClick={onClickThumbUp} /> {data.likeCount}
          <IconButton icon="thumbDown" onClick={onClickThumbDown} />
          <IconButton icon="share" onClick={onClickShare} />
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
    padding: 16px;
    gap: 16px;
    background-color: ${({ theme }) => theme.color_card_background};
    border: 1px solid ${({ theme }) => theme.color_card_border};
    border-radius: 10px;

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
    font-size: 1.1rem;
    white-space: pre-wrap;
  `,
  VoteCount: styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color_text_dark};
    margin: 5px 0;
  `,
  Vote: styled.div``,
  buttonWrapper: styled.div`
    display: flex;
    margin-top: 16px;
    font-size: 0.9rem;
    align-items: center;
    color: ${({ theme }) => theme.color_text_dark};
    line-height: 26px;
  `,
}
