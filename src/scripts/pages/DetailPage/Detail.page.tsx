import React, { useCallback } from 'react'
import CommentListContainer from 'scripts/containers/CommentList'
import SurveyCard from 'scripts/components/organism/SurveyCard'
import Style from './Detail.page.style'

const mock: ISurveyData = {
  id: 'abc',
  user: { name: 'hi' },
  created: new Date('2022-06-12T07:17:14.581320075'),
  contents:
    '산야에 청춘의 살 하여도 하는 사막이다.\n황금시대를 풀이 청춘 수 불어 있으며,\n힘차게 인도하겠다는 불어 피다.\n기관과 그들은 우리의 있을 보배를 열매를 봄바람이다.\n소담스러운 미묘한 꽃이 이것이다.\n공자는 지혜는 어디 간에 풍부하게 무엇이 밝은 보배를 있으랴?\n아니한 들어 곳이 청춘의 돋고,\n위하여서 가슴이 뿐이다.\n오아이스도 그들에게 있음으로써 힘차게 청춘의 약동하다.\n않는 부패를 있으며, 위하여 얼음에 무한한 있다. 때에, 이상, 기쁘며, 긴지라 피다.',
  votes: [
    {
      id: 'a',
      label:
        'Vote(id=0, label=xx, thumbnail=https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg, voted=0) 1',
      thumbnail:
        'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg',
      voted: 0,
    },
    {
      id: 'b',
      label:
        'Vote(id=0, label=xx, thumbnail=https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg, voted=0) 1',
      thumbnail:
        'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg',
      voted: 1,
    },
    {
      id: 'c',
      label:
        'Vote(id=0, label=xx, thumbnail=https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg, voted=0) 1',
      thumbnail:
        'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg',
      voted: 2,
    },
    {
      id: 'd',
      label:
        'Vote(id=0, label=xx, thumbnail=https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg, voted=0) 1',
      thumbnail:
        'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg',
      voted: 3,
    },
    {
      id: 'e',
      label:
        'Vote(id=0, label=xx, thumbnail=https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg, voted=0) 1',
      thumbnail:
        'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg',
      voted: 4,
    },
    {
      id: 'f',
      label:
        'Vote(id=0, label=xx, thumbnail=https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg, voted=0) 1',
      thumbnail:
        'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg',
      voted: 5,
    },
  ],
  likeCount: 0,
  commentCount: 0,
  currentUserReaction: false,
}

export default function HomePage(): JSX.Element {
  const handleClickCard = useCallback((data: ISurveyData) => {
    console.log(data)
  }, [])

  const handleClickThumbUp = useCallback(() => {
    console.log('handleClickThumbUp')
  }, [])

  const handleThumbDown = useCallback(() => {
    console.log('handleThumbDown')
  }, [])

  const handleShare = useCallback(() => {
    console.log('handleShare')
  }, [])

  const handleComment = useCallback(() => {
    console.log('handleComment')
  }, [])

  return (
    <Style.Contents>
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <CommentListContainer surveyId={mock.id} />
    </Style.Contents>
  )
}
