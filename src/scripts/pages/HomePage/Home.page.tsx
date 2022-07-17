import React, { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import SurveyCard from 'scripts/components/organism/SurveyCard'
import { useGetSurveysQuery } from 'scripts/stores/api'
import Style from './Home.page.style'

export default function HomePage(): JSX.Element {
  const navigate = useNavigate()

  const {
    data: surveyData,
    error: surveyError,
    isFetching: surveyIsFetching,
  } = useGetSurveysQuery({})

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

  const renderSurveyCard = useMemo(() => {
    if (surveyIsFetching) return <div>loading...</div>
    if (surveyError || !surveyData)
      return (
        <div>
          <div>error...</div>
          <p>{surveyError + ''}</p>
        </div>
      )

    return surveyData.data.map((survey) => (
      <SurveyCard
        key={`survey-${survey.id}`}
        data={survey}
        onClickCard={handleClickCard}
        onClickThumbUp={() => handleClickThumbUp()}
        onClickThumbDown={() => handleThumbDown()}
        onClickShare={() => handleShare()}
        onClickComment={() => handleComment()}
      />
    ))
  }, [
    handleClickCard,
    handleClickThumbUp,
    handleComment,
    handleShare,
    handleThumbDown,
    surveyData,
    surveyError,
    surveyIsFetching,
  ])

  return (
    <Style.Contents>
      {renderSurveyCard}
      {/** skeleton */}
    </Style.Contents>
  )
}
