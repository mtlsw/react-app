import React, { useCallback, useState } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import CommentField from 'scripts/components/molecule/CommentField'
import styled, { css } from 'styled-components'

interface ICommentCardProps {
  data: ICommentData
  userProfile?: IUser
  onClickThumbUp: () => void
  onClickThumbDown: () => void
  onSubmitComment: (contents: string) => void
  handleToLogin: () => void
}

export default function CommentCard(props: ICommentCardProps): JSX.Element {
  const { data, userProfile, onClickThumbUp, onClickThumbDown, onSubmitComment, handleToLogin } =
    props

  const [showSumbitForm, setShowSubmitForm] = useState(false)

  const handleClickComment = useCallback(() => {
    setShowSubmitForm(true)
  }, [])

  const handleClickSubmit = useCallback((contents: string) => {
    // 숨기는건 성공 후.
    onSubmitComment(contents)
    setShowSubmitForm(false)
  }, [])

  return (
    <Style.Component>
      <ProfileThumbnail
        src={
          'https://image.musinsa.com/mfile_s01/2021/11/26/baf76429a02a9aab640eaee3baa787eb164756.jpg'
        }
        size="m"
      />
      <Style.Contents>
        <Style.HeaderWrapper>
          {data.user.name}
          {new Date(data.created).toLocaleDateString()}
        </Style.HeaderWrapper>
        <Style.DetailWrapper>{data.contents}</Style.DetailWrapper>
        <Style.buttonWrapper>
          <IconButton icon="thumbUp" onClick={onClickThumbUp} /> {data.likeCount}
          <IconButton icon="thumbDown" onClick={onClickThumbDown} />
          <IconButton icon="comment" onClick={handleClickComment} />
        </Style.buttonWrapper>
        {showSumbitForm && (
          <CommentField
            user={userProfile}
            toLoginPage={handleToLogin}
            onClickSubmit={handleClickSubmit}
          />
        )}
      </Style.Contents>
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    display: flex;
    gap: 16px;
  `,
  Contents: styled.div`
    flex-grow: 1;
  `,
  HeaderWrapper: styled.div`
    margin-bottom: 2px;
  `,
  DetailWrapper: styled.div``,
  VoteCount: styled.div``,
  Vote: styled.div``,
  buttonWrapper: styled.div`
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    color: ${({ theme }) => theme.color_text_dark};
  `,
}
