import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SurveyContainer from '.'

export default {
  title: 'container/Survey',
  component: SurveyContainer,
} as ComponentMeta<typeof SurveyContainer>

const Template: ComponentStory<typeof SurveyContainer> = (args) => <SurveyContainer {...args} />

export const Basic = Template.bind({})
Basic.args = {}
