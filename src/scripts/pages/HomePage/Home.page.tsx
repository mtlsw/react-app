import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import SurveyCard from 'scripts/components/organism/SurveyCard'
import Style from './Home.page.style'

const mock = {
  id: 1,
  thumbnail: '1376585075100.jpg',
  contents: '1800만원으로 뭐삼',
  commentCount: 24,
  registDate: new Date(),
  thumbUpCount: 240,
  userName: '물티슈',
  voteCount: 7700,
  votes: [],
}

export default function HomePage(): JSX.Element {
  const navigate = useNavigate()

  const handleClickCard = useCallback(
    (data: ISurveyData) => {
      console.log(data)
      navigate(`/${data.id}`)
    },
    [navigate],
  )

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
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
      <SurveyCard
        data={mock}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
    </Style.Contents>
  )
}
