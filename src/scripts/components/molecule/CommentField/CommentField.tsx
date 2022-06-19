import React, { ChangeEventHandler, useCallback, useState, useMemo } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import ProfileThumbnail from 'scripts/components/atoms/ProfileThumbnail'
import TextField from 'scripts/components/atoms/TextField'
import styled, { css } from 'styled-components'

interface ICommentTextFieldProps {
  user?: IUser
  toLoginPage: () => void
  onClickSubmit: (contents: string) => void
}

export default function CommentTextField(props: ICommentTextFieldProps): JSX.Element {
  const { user, toLoginPage, onClickSubmit } = props

  const [onFocus, setOnFocus] = useState(false)
  const [contents, setContents] = useState('')

  const handleClickSearch = useCallback(() => {
    onClickSubmit && onClickSubmit(contents)
  }, [onClickSubmit, contents])

  return (
    <Style.Component>
      <ProfileThumbnail src={user?.thumbnail} size="m" />
      <Style.CommentTextField
        placeholder="공개댓글 추가"
        value={contents}
        setValue={setContents}
        postData={<button onClick={handleClickSearch}>등록</button>}
      />
    </Style.Component>
  )
}

const Style = {
  Component: styled.div``,
  CommentTextField: styled(TextField)`
    width: 100%;
    height: 38px;
    border-radius: 4px;
  `,
}
