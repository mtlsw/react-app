import React, { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import ReactSelect from 'react-select'

interface ISelectProps {
  value: ISelectOption
  options: ISelectOption[]
  onChange?: (index: number, item: ISelectOption) => void
}

export default function Select(props: ISelectProps): JSX.Element {
  const { value, options, onChange } = props

  const handleChange = useCallback((data) => {
    console.log(data)
  }, [])

  return (
    <Style.Select
      value={value.value}
      onChange={handleChange}
      //menuIsOpen
    >
      {options.map((option, index) => (
        <option key={`option-${index}`}>{option.label}</option>
      ))}
    </Style.Select>
  )
}

const Style = {
  Select: styled.select``,
}
