import React, { useCallback } from 'react'
import CommentListContainer from 'scripts/containers/CommentList'
import SurveyCard from 'scripts/components/organism/SurveyCard'
import Style from './Detail.page.style'
import { useParams } from 'react-router-dom'
import { useGetSurveyQuery } from 'scripts/stores/api'

export default function DetailPage(): JSX.Element {
  const { id = '' } = useParams()

  // TODO: fetching & error handling
  const {
    data: surveyData,
    // error: surveyError,
    // isFetching: surveyIsFetching,
  } = useGetSurveyQuery({ id }, { skip: id === '' })

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
      {surveyData && (
        <>
          <SurveyCard
            data={surveyData}
            onClickCard={handleClickCard}
            onClickThumbUp={() => handleClickThumbUp()}
            onClickThumbDown={() => handleThumbDown()}
            onClickShare={() => handleShare()}
            onClickComment={() => handleComment()}
          />
          <CommentListContainer surveyId={surveyData.id} />
        </>
      )}
    </Style.Contents>
  )
}
