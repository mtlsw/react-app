import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SurveyResult from '.'

export default {
  title: 'components/molecule/SurveyResult',
  component: SurveyResult,
  argTypes: {
    onClickSearch: {
      action: 'onClickSearch',
    },
  },
} as ComponentMeta<typeof SurveyResult>

const Template: ComponentStory<typeof SurveyResult> = (args) => <SurveyResult {...args} />

export const Basic = Template.bind({})
Basic.args = {
  data: [
    {
      label: 'one',
      voted: 10,
    },
    {
      label: 'two',
      voted: 20,
    },
    {
      label: 'three',
      voted: 30,
    },
  ],
}
