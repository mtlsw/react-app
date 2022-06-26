import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'

interface ITextFieldProps {
  value?: string
  placeholder?: string
  postData?: React.ReactNode
  setValue?: (value: string) => void
}

export default function TextField(props: ITextFieldProps): JSX.Element {
  const { postData, setValue, ...inputProps } = props

  const handleChange = useCallback(
    (e) => {
      setValue && setValue(e.currentTarget.value)
    },
    [setValue],
  )

  return (
    <Style.Component>
      <Style.TextField type="text" onChange={handleChange} {...inputProps} spellCheck={false} />
      {postData}
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    display: flex;
    width: 100%;
  `,
  TextField: styled.input`
    flex-grow: 1;
    padding: 0 10px;
    border: none;
    color: ${({ theme }) => theme.color_text};
    background: ${({ theme }) => theme.color_background};
  `,
}
