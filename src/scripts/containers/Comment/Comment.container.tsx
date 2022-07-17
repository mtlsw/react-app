import React, { useCallback } from 'react'
import CommentCard from 'scripts/components/organism/CommentCard'
import useGoogleOAuth from 'scripts/hooks/useGoogleOAuth'
import { usePostNestedCommentMutation } from 'scripts/stores/api'
import { useAppSelector } from 'scripts/stores/reducers'
import styled from 'styled-components'
import NestedCommentList from '../NestedCommentList'

interface ICommentContainerProps {
  surveyId: string
  data: ICommentData
}

export default function CommentContainer(props: ICommentContainerProps): JSX.Element {
  const { surveyId, data } = props

  const googleOAuth = useGoogleOAuth()
  const { userProfile } = useAppSelector((rootStore) => rootStore.auth)

  const [postNestedComment, result] = usePostNestedCommentMutation()

  const handleClickThumbUp = useCallback(() => {
    //
  }, [])

  const handleClickThumbDown = useCallback(() => {
    //
  }, [])

  const handleSubmitComment = useCallback(
    (contents: string) => {
      if (userProfile) {
        postNestedComment({ id: surveyId, commentId: data.id, contents })
      }
    },
    [userProfile, postNestedComment, surveyId, data.id],
  )

  const handleToLogin = useCallback(() => {
    googleOAuth.login(surveyId, data.id)
  }, [googleOAuth, surveyId, data])

  return (
    <Style.Container>
      <CommentCard
        data={data}
        userProfile={userProfile}
        handleToLogin={handleToLogin}
        onClickThumbUp={handleClickThumbUp}
        onClickThumbDown={handleClickThumbDown}
        onSubmitComment={handleSubmitComment}
      />
      {data.nestedCommentCount > 0 && (
        <NestedCommentList
          surveyId={surveyId}
          commentId={data.id}
          nestedCommentCount={data.nestedCommentCount}
        />
      )}
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
  `,
}
