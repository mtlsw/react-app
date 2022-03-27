import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'
import ReactSelect from 'react-select'

interface ISelectProps {
  value: ISelectOption
  options: ISelectOption[]
}

export default function Select(props: ISelectProps): JSX.Element {
  const { value, options } = props

  const handleChange = useCallback((data) => {
    console.log(data)
  }, [])

  return (
    <Style.Select
      defaultValue={value}
      options={options}
      onChange={handleChange}
      //menuIsOpen
    />
  )
}

const Style = {
  Select: styled(ReactSelect)``,
}
