import React from 'react'
import styled, { css } from 'styled-components'

interface IRadioFieldProps {
  selected?: number
  children: (React.ReactNode | string)[]
  group: string
  onChange: (checked: number) => void
}

export default function RadioField(props: IRadioFieldProps): JSX.Element {
  const { selected, children, group, onChange } = props

  return (
    <Styled.Component>
      {children.map((child, index) => (
        <Styled.Radio key={`radio-${group}-${index}`}>
          <input
            type="radio"
            checked={selected === index}
            id={`${group}-${index}`}
            name={group}
            onChange={() => {
              onChange && onChange(index)
            }}
          />
          <Styled.Label htmlFor={`${group}=${index}`} checked={selected === index}>
            {child}
          </Styled.Label>
        </Styled.Radio>
      ))}
    </Styled.Component>
  )
}

const Styled = {
  Component: styled.div`
    display: flex;
    vertical-align: center;
    flex-direction: column;
    gap: 4px;
  `,
  Radio: styled.div`
    input[type='radio'] {
      display: none;
      &:checked {
        + label {
        }
      }
      &:disabled {
        + label {
          opacity: 0.2;
          &:hover {
            cursor: default;
          }
        }
      }
      [type='radio']:checked + label:after,
      [type='radio']:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: black;
        position: absolute;
        top: 6px;
        left: 4px;
        border-radius: 100%;
        transition: all 0.2s ease-in-out;
      }
      [type='radio']:not(:checked) + label:after {
        opacity: 0;
        transform: scale(0);
      }
      [type='radio']:checked + label:after {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  Label: styled.label<{ checked: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 25px;
    font-size: 13px;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      opacity: 1;
    }

    ${({ checked }) =>
      checked &&
      css`
        color: blue;
      `}

    :before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 18px;
      height: 18px;
      border: 1px solid brown;
      border-radius: 100%;
      background: green;
      ${({ checked }) =>
        checked &&
        css`
          border: 1px solid blue;
        `}
    }
  `,
}
