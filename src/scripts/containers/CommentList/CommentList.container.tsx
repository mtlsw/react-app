import React, { useCallback, useMemo, useState } from 'react'
import CommentCointainer from 'scripts/containers/Comment'
import styled from 'styled-components'
import CommentField from 'scripts/components/molecule/CommentField'
import SearchTextField from 'scripts/components/molecule/SearchTextField'
import useGoogleOAuth from 'scripts/hooks/useGoogleOAuth'
import { useAppSelector } from 'scripts/stores/reducers'
import Select from 'scripts/components/atoms/Select'
import { useGetCommentsQuery, usePostCommentMutation } from 'scripts/stores/api'

interface ICommentListContainerProps {
  surveyId: string
}

export default function CommentListContainer(props: ICommentListContainerProps): JSX.Element {
  const { surveyId } = props

  // TODO: fetching & error handling
  const {
    data: commentsData,
    // error: commentsError,
    // isFetching: commentsIsFetching,
  } = useGetCommentsQuery({ id: surveyId })

  const [postComment, result] = usePostCommentMutation()

  const orderList = useMemo(() => {
    return [
      { label: '최신 순', value: 'latest' },
      { label: '좋아요 순', value: 'like' },
      { label: '싫어요 순', value: 'unlike' },
    ] as ISelectOption[]
  }, [])

  const googleOAuth = useGoogleOAuth()
  const { userProfile } = useAppSelector((rootStore) => rootStore.auth)

  const [order, setOrder] = useState(orderList[0])

  const handleSubmitComment = useCallback(
    (contents: string) => {
      if (userProfile) {
        postComment({ id: surveyId, contents })
      }
    },
    [postComment, surveyId, userProfile],
  )

  const handleClickSearch = useCallback((contents: string) => {
    alert(`search - ${contents}`)
  }, [])

  const handleClickLogin = useCallback(() => {
    googleOAuth.login(surveyId)
  }, [googleOAuth, surveyId])

  return (
    <Style.Container>
      <Style.HeaderWrapper>
        <h5>댓글 {commentsData?.totalCount}개</h5>
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
        {commentsData
          ? commentsData.data.map((d) => (
              <CommentCointainer key={`comment-${d.id}`} surveyId={surveyId} data={d} />
            ))
          : 'fecthing'}
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
