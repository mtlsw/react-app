import React, { useCallback, useMemo, useState } from 'react'
import CommentCointainer from 'scripts/containers/Comment'
import CommentCard from 'scripts/components/organism/CommentCard'
import styled, { css } from 'styled-components'
import CommentField from 'scripts/components/molecule/CommentField'
import SearchTextField from 'scripts/components/molecule/SearchTextField'

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

  const categoryList = useMemo(() => {
    return [{ label: '자동차', value: 'car' }] as ISelectOption[]
  }, [])

  const handleSubmitComment = useCallback((contents: string) => {
    alert(contents)
  }, [])

  const handleClickSearch = useCallback((contents: string) => {
    alert(contents)
  }, [])

  return (
    <Style.Container>
      <Style.HeaderWrapper>댓글 {mock.totalCount}개</Style.HeaderWrapper>
      <Style.CommentField>
        <CommentField onClickSubmit={handleSubmitComment} />
        <SearchTextField onClickSearch={handleClickSearch} />
      </Style.CommentField>
      <div>
        {mock.data.map((d) => (
          <CommentCointainer key={`comment-${d.id}`} data={d} />
        ))}
      </div>
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
  `,
  HeaderWrapper: styled.div`
    height: 24px;
    margin-bottom: 2px;
  `,
  CommentField: styled.div``,
  SearchTextField: styled.div`
    flex-grow: 1;
  `,
}
