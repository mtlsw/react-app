import React, { ChangeEventHandler, useCallback, useState } from 'react'
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

  const handleClickCard = useCallback(
    (e) => {
      e.stopPropagation()
      onClickCard(data)
    },
    [onClickCard],
  )

  return (
    <Style.Component onClick={handleClickCard}>
      <ProfileThumbnail src={data.thumbnail} size="l" />
      <Style.Contents>
        <NameAndRegistTime name={data.userName} date={data.registDate} />
        <Style.DetailWrapper>{data.contents}</Style.DetailWrapper>
        <Style.VoteCount>{data.voteCount}명 투표</Style.VoteCount>
        <Style.Vote>
          <SurveyResult
            selected={checkedIndex}
            onChange={setCheckedIndex}
            data={[
              {
                label: 'one',
                voted: 10,
              },
              {
                label: 'two',
                voted: 20,
              },
              {
                label: 'three',
                voted: 30,
              },
            ]}
          />
        </Style.Vote>
        <Style.buttonWrapper>
          <IconButton icon="thumbUp" onClick={onClickThumbUp} /> {data.thumbUpCount}
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
