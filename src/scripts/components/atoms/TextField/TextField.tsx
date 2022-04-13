import React, { ChangeEventHandler, useCallback } from 'react'
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
      <Style.TextField type="text" onChange={handleChange} {...inputProps} />
      {postData}
    </Style.Component>
  )
}

const Style = {
  Component: styled.div`
    display: flex;
  `,
  TextField: styled.input``,
}