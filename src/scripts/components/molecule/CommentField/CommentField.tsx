import React, { ChangeEventHandler, useCallback, useState, useMemo } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import TextField from 'scripts/components/atoms/TextField'
import styled, { css } from 'styled-components'

interface ICommentTextFieldProps {
  onClickSubmit: (contents: string) => void
}

export default function CommentTextField(props: ICommentTextFieldProps): JSX.Element {
  const { onClickSubmit } = props

  const [contents, setContents] = useState('')

  const handleClickSearch = useCallback(() => {
    onClickSubmit && onClickSubmit(contents)
  }, [onClickSubmit, contents])

  return (
    <Style.Component>
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
