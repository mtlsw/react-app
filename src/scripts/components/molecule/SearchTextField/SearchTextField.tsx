import React, { ChangeEventHandler, useCallback, useState, useMemo } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import TextField from 'scripts/components/atoms/TextField'
import styled, { css } from 'styled-components'

interface ISearchTextFieldProps {
  onClickSearch: (keyword: string) => void
}

export default function SearchTextField(props: ISearchTextFieldProps): JSX.Element {
  const { onClickSearch } = props

  const [keyword, setKeyword] = useState('')

  const handleClickSearch = useCallback(() => {
    onClickSearch && onClickSearch(keyword)
  }, [onClickSearch, keyword])

  return (
    <Style.Component>
      <Style.SearchTextField
        value={keyword}
        setValue={setKeyword}
        postData={<IconButton icon="search" onClick={handleClickSearch} />}
      />
    </Style.Component>
  )
}

const Style = {
  Component: styled.div``,
  SearchTextField: styled(TextField)`
    width: 100%;
  `,
}
