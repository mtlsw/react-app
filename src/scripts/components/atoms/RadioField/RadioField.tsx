import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

interface IRadioFieldProps {
  selected?: number
  children: (React.ReactNode | string)[]
  group: string
  onChange: (checked: number) => void
}

export default function RadioField(props: IRadioFieldProps): JSX.Element {
  const { selected, children, group, onChange } = props

  const [select, setSelect] = useState<number | undefined>(selected)

  useEffect(() => {
    typeof select === 'number' && onChange && onChange(select)
  }, [select])

  return (
    <Styled.Component
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {children.map((child, index) => (
        <Styled.Radio key={`radio-${group}-${index}`}>
          <input
            type="radio"
            checked={select === index}
            id={`${group}-${index}`}
            name={group}
            onChange={() => {
              setSelect(index)
            }}
          />
          <Styled.Label htmlFor={`${group}-${index}`} checked={select === index}>
            {child}
          </Styled.Label>
        </Styled.Radio>
      ))}
    </Styled.Component>
  )
}

const Styled = {
  Component: styled.div`
    padding: 4px;
    display: flex;
    vertical-align: center;
    flex-direction: column;
    gap: 4px;
  `,
  Radio: styled.div`
    line-height: 28px;
    min-height: 28px;
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
    }
  `,
  Label: styled.label<{ checked: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 32px;
    font-size: 1rem;
    opacity: 0.8;
    color: ${({ theme }) => theme.color_text};
    transition: all 0.2s ease;
    cursor: pointer;

    :hover {
      opacity: 1;
    }

    ${({ checked }) =>
      checked &&
      css`
        opacity: 1;
      `}

    :before {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 5px;
      top: 5px;
      width: 18px;
      height: 18px;
      border: 1px solid ${({ theme }) => theme.color_text};
      border-radius: 100%;
      background: transparent;
      ${({ checked }) =>
        checked &&
        css`
          border: 1px solid ${({ theme }) => theme.color_text};
        `}
    }

    :after {
      content: '';
      box-sizing: border-box;
      width: 12px;
      height: 12px;
      background: white;
      position: absolute;
      top: 8px;
      left: 8px;
      border-radius: 100%;
      transition: all 0.2s ease-in-out;
      
      ${({ checked }) =>
        checked
          ? css`
              opacity: 1;
              transform: scale(1);
              border: 1px solid ${({ theme }) => theme.color_text};
            `
          : css`
              opacity: 0;
              transform: scale(0);
            `}
  `,
}
