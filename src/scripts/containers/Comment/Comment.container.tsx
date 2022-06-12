import React, { useCallback, useMemo, useState } from 'react'
import CommentCard from 'scripts/components/organism/CommentCard'
import styled, { css } from 'styled-components'
import NestedCommentList from '../NestedCommentList'

interface ICommentContainerProps {
  data: ICommentData
}

export default function CommentContainer(props: ICommentContainerProps): JSX.Element {
  const { data } = props

  const handleClickThumbUp = useCallback(() => {
    //
  }, [])

  const handleClickThumbDown = useCallback(() => {
    //
  }, [])

  const handleSubmitComment = useCallback(() => {
    //
  }, [])

  return (
    <Style.Container>
      <CommentCard
        data={data}
        onClickThumbUp={handleClickThumbUp}
        onClickThumbDown={handleClickThumbDown}
        onSubmitComment={handleSubmitComment}
      />
      {data.nestedCommentCount > 0 && (
        <NestedCommentList commentId={data.id} nestedCommentCount={data.nestedCommentCount} />
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
