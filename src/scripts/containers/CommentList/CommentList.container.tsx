import React, { useCallback, useMemo, useState } from 'react'
import CommentCointainer from 'scripts/containers/Comment'
import CommentCard from 'scripts/components/organism/CommentCard'
import styled, { css } from 'styled-components'
import CommentField from 'scripts/components/molecule/CommentField'
import SearchTextField from 'scripts/components/molecule/SearchTextField'
import useGoogleOAuth from 'scripts/hooks/useGoogleOAuth'
import { useAppSelector } from 'scripts/stores/reducers'
import Select from 'scripts/components/atoms/Select'

const mock: IGetCommentsResponse = {
  currPage: 0,
  nextPage: false,
  totalCount: 5,
  data: [
    {
      id: 'a',
      user: { name: '이상훈TV' },
      created: new Date(),
      contents: '와 진짜 박진감 넘치네~\n테슬라 오토파일럿 너무 좋구만요',
      likeCount: 154,
      nestedCommentCount: 12,
    },
    {
      id: 'b',
      user: { name: '우히하' },
      created: new Date(),
      contents: '성로형 저렇게 떠드는데 채팅 다 딴얘기하는게 킬포 ㅋㅋㅋ',
      likeCount: 210,
      nestedCommentCount: 1,
    },
    {
      id: 'c',
      user: { name: '김봉규' },
      created: new Date(),
      contents:
        '오파하고 OTA는 테슬라가 진짜 넘사인듯 합니다. 마감이나 세팅이 조금더 바쳐주면 독보적일건데ㅜㅜ',
      likeCount: 56,
      nestedCommentCount: 14,
    },
    {
      id: 'd',
      user: { name: '김성엽' },
      created: new Date(),
      contents: '솔까 나보다 운전 천배 잘하는듯 엉엉',
      likeCount: 28,
      nestedCommentCount: 0,
    },
    {
      id: 'e',
      user: { name: 'Sup Yoo' },
      created: new Date(),
      contents: '저 인터체인지나 정션의 커브를 도는것 자체가 부럽다.\n\n- 아이오닉5 차주 -',
      likeCount: 80,
      nestedCommentCount: 8,
    },
  ],
}

interface ICommentListContainerProps {
  surveyId: string
}

export default function CommentListContainer(props: ICommentListContainerProps): JSX.Element {
  const { surveyId } = props

  const orderList = useMemo(() => {
    return [
      { label: '최신 순', value: 'latest' },
      { label: '좋아요 순', value: 'like' },
      { label: '싫어요 순', value: 'unlike' },
      ,
    ] as ISelectOption[]
  }, [])

  const googleOAuth = useGoogleOAuth()
  const { userProfile } = useAppSelector((rootStore) => rootStore.auth)

  const [order, setOrder] = useState(orderList[0])

  const handleSubmitComment = useCallback((contents: string) => {
    alert(`comment - ${contents}`)
  }, [])

  const handleClickSearch = useCallback((contents: string) => {
    alert(`search - ${contents}`)
  }, [])

  const handleClickLogin = useCallback(() => {
    googleOAuth.login(surveyId)
  }, [googleOAuth, surveyId])

  return (
    <Style.Container>
      <Style.HeaderWrapper>
        <h5>댓글 {mock.totalCount}개</h5>
        <Style.OrderControl>
          <Select
            options={orderList}
            value={order}
            onChange={(index) => {
              setOrder(orderList[index])
            }}
          />
        </Style.OrderControl>
      </Style.HeaderWrapper>
      <Style.CommentField>
        <CommentField
          user={userProfile}
          toLoginPage={handleClickLogin}
          onClickSubmit={handleSubmitComment}
        />
        <SearchTextField onClickSearch={handleClickSearch} />
      </Style.CommentField>
      <div>
        {mock.data.map((d) => (
          <CommentCointainer key={`comment-${d.id}`} surveyId={surveyId} data={d} />
        ))}
      </div>
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    margin: 24px 0;
    display: flex;
    gap: 5px;
    flex-direction: column;
  `,
  HeaderWrapper: styled.div`
    height: 24px;
    margin-bottom: 2px;
    display: flex;
    gap: 32px;
    h5 {
      margin: 0;
      font-size: 16px;
    }
  `,
  OrderControl: styled.div``,
  CommentField: styled.div``,
  SearchTextField: styled.div`
    flex-grow: 1;
  `,
}
