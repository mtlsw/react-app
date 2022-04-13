import React, { useMemo, useState } from 'react'
import IconButton from 'scripts/components/atoms/IconButton'
import Select from 'scripts/components/atoms/Select'
import SearchTextField from 'scripts/components/molecule/SearchTextField/SearchTextField'
import styled, { css } from 'styled-components'

export default function HeaderContainer() {
  const categoryList = useMemo(() => {
    return [{ label: '자동차', value: 'car' }] as ISelectOption[]
  }, [])

  const [category, setCategory] = useState(categoryList[0])
  const [keyword, setKeyword] = useState('')
  const [isOnAlarm, setIsOnAlarm] = useState(true)

  return (
    <Style.Container>
      <Select options={categoryList} value={category} />
      <Style.SearchTextField>
        <SearchTextField onClickSearch={setKeyword} />
      </Style.SearchTextField>
      <IconButton
        icon={isOnAlarm ? 'alarmOn' : 'alarmOff'}
        onClick={() => setIsOnAlarm(!isOnAlarm)}
      />
    </Style.Container>
  )
}

const Style = {
  Container: styled.div`
    display: flex;
    gap: 5px;
  `,
  SearchTextField: styled.div`
    flex-grow: 1;
  `,
}
