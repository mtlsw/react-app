import React, { ChangeEventHandler, useCallback, useState } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import SurveyResult from 'scripts/components/molecule/SurveyResult'
import styled, { css } from 'styled-components'

interface ISurveyCardProps {
  data: ISurveyData
  onClickThumbUp: () => void
  onClickThumbDown: () => void
  onClickShare: () => void
  onClickComment: () => void
}

export default function SurveyCard(props: ISurveyCardProps): JSX.Element {
  const { data, onClickThumbUp, onClickThumbDown, onClickShare, onClickComment } = props

  const [checkedIndex, setCheckedIndex] = useState<number>()

  return (
    <Style.Component>
      <ProfileThumbnail src={data.thumbnail} />
      <Style.Contents>
        <Style.HeaderWrapper>
          {data.userName}
          {data.registDate.toLocaleDateString()}
        </Style.HeaderWrapper>
        <Style.DetailWrapper>{data.contents}</Style.DetailWrapper>
        <Style.VoteCount>{data.voteCount}</Style.VoteCount>
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
