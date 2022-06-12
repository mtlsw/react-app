import React, { ChangeEventHandler, useCallback, useState, useMemo } from 'react'
import LinearBar from 'scripts/components/atoms/LinearBar'
import RadioField from 'scripts/components/atoms/RadioField'
import styled, { css } from 'styled-components'

interface ISurveyResultProps {
  selected?: number
  data: IVoteData[]
  onChange: (selected: number) => void
}

export default function SurveyResult(props: ISurveyResultProps): JSX.Element {
  const { selected, data, onChange } = props

  const voteCount = useMemo(() => {
    return data.reduce((acc, obj) => {
      return acc + (obj.voted || 0)
    }, 0)
  }, [data])

  return (
    <Style.Component>
      <RadioField group="surveyResult" selected={selected} onChange={onChange}>
        {data.map((vote, index) => (
          <LinearBar
            key={`survey-result-${index}`}
            label={vote.label}
            value={vote.voted > 0 ? (vote.voted / voteCount) * 100 : 0}
          />
        ))}
      </RadioField>
    </Style.Component>
  )
}

const Style = {
  Component: styled.div``,
  SurveyResult: styled.input``,
}
