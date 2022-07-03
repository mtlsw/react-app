import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SurveyResult from 'scripts/components/molecule/SurveyResult'
import useGoogleOAuth from 'scripts/hooks/useGoogleOAuth'
import { useAppSelector } from 'scripts/stores/reducers'
import styled, { css } from 'styled-components'

interface ISurveyContainerProps {
  votes: IVoteData[]
  voted?: number
}

export default function SurveyContainer(props: ISurveyContainerProps) {
  const { votes, voted } = props

  const location = useLocation()
  const googleOAuth = useGoogleOAuth()
  const { userProfile } = useAppSelector((rootStore) => rootStore.auth)

  const [checkedIndex, setCheckedIndex] = useState<number>()

  useEffect(() => {
    console.log('check ', checkedIndex)
  }, [checkedIndex])

  const voteCount = useMemo(() => {
    return votes.reduce((acc, obj) => {
      return acc + (obj.voted || 0)
    }, 0)
  }, [votes])

  /**
   * userProfile이 없는 경우
   * -> 투표 결과 안보여주고 클릭시 로그인으로
   * userProfile이 있는 경우
   * -> voted(사용자가 투표한 결과)가 있는 경우
   *  -> 투표 결과 보여줌
   * -> voited가 없는 경우
   *  -> 투표 결과 안보여주고 투표 유도
   */
  return (
    <Style.Container>
      <Style.VoteCount>{voteCount}명 투표</Style.VoteCount>
      <Style.Vote>
        <SurveyResult selected={checkedIndex} onChange={setCheckedIndex} data={votes} />
      </Style.Vote>
    </Style.Container>
  )
}

const Style = {
  Container: styled.div``,
  VoteCount: styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color_text_dark};
    margin: 5px 0;
  `,
  Vote: styled.div``,
}
