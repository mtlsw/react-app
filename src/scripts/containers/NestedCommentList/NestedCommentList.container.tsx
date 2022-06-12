import React, { useCallback, useMemo, useState } from 'react'
import NestedCommentCard from 'scripts/components/organism/NestedCommentCard'
import styled, { css } from 'styled-components'

const nestedMock: INestedCommentData[] = [
  {
    id: 'a',
    user: {
      name: '끼룩끼룩',
      thumbnail: '',
    },
    contents: 'C300 예약 후 기다리고 있는데 e250도 살짝 고민 되네요..ㅜㅜ',
    created: new Date(),
    likeCount: 5,
  },
  {
    id: 'a',
    user: {
      name: 'G70 3.3 BITURBO',
      thumbnail: '',
    },
    contents:
      '좀만 참자.\nE클, 5시리즈 신형 나오고 반도체 이슈 풀리면 지금보다는 좋은 조건으로\n구매할 수 있겠지.\nC300이 무지 끌리네요.',
    created: new Date(),
    likeCount: 5,
  },
  {
    id: 'a',
    user: {
      name: 'Hamate',
      thumbnail: '',
    },
    contents:
      '오....ㅎㅎㅎ 영상 잘 봤습니다\n목소리 넘 스윗하시고 말씀 잘하신다고 속으로 생각만 했는데 유명하시네용👍\n🏻E클 구매 90프로 결정했는데........ 이거보니까 맘이 또 달라지네요^^;;;;;;;;;;;;; 얇은 귀.........',
    created: new Date(),
    likeCount: 5,
  },
  {
    id: 'a',
    user: {
      name: 'Jjh K',
      thumbnail: '',
    },
    contents: '이거 완전 궁금했는데 감사합니다!!',
    created: new Date(),
    likeCount: 5,
  },
  {
    id: 'a',
    user: {
      name: '이러지마셈',
      thumbnail: '',
    },
    contents:
      'c클 타고있는데 완전만족중입니다 옵션 너무좋아서 불편함도없고 일단신형이다보니 하차감좋습니다',
    created: new Date(),
    likeCount: 5,
  },
]

interface INestedCommentListContainerProps {
  commentId: string
  nestedCommentCount: number
}

export default function NestedCommentListContainer(
  props: INestedCommentListContainerProps,
): JSX.Element {
  const { commentId, nestedCommentCount } = props

  const [isExpand, setIsExpand] = useState(false)

  const handleClickExpand = useCallback(() => {
    setIsExpand(!isExpand)
  }, [isExpand])

  const handleClickNextComment = useCallback(() => {
    //
  }, [])

  const handleClickThumbUp = useCallback(() => {
    //
  }, [])

  const handleClickThumbDown = useCallback(() => {
    //
  }, [])

  const categoryList = useMemo(() => {
    return [{ label: '자동차', value: 'car' }] as ISelectOption[]
  }, [])

  return (
    <Style.Container>
      {/* 개시글 주인의 경우 아이디랑 같이 보여줌 */}
      {nestedCommentCount > 0 && (
        <Style.ExpandButton onClick={handleClickExpand}>
          답글 {nestedCommentCount} 개 {isExpand ? '숨기기' : '보기'}
        </Style.ExpandButton>
      )}
      {isExpand && (
        <Style.Wrapper>
          {nestedMock.map((data) => (
            <NestedCommentCard
              key={`nested-${data.id}`}
              data={data}
              onClickThumbUp={handleClickThumbUp}
              onClickThumbDown={handleClickThumbDown}
            />
          ))}
        </Style.Wrapper>
      )}
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    margin-left: 56px;
  `,
  ExpandButton: styled.div`
    color: ${({ theme }) => theme.color_primary};
    cursor: pointer;
  `,
  Wrapper: styled.div``,
}
