import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SurveyCard from '.'

export default {
  title: 'components/organism/SurveyCard',
  component: SurveyCard,
  argTypes: {
    onClickCard: {
      action: 'onClickCard',
    },
  },
} as ComponentMeta<typeof SurveyCard>

const Template: ComponentStory<typeof SurveyCard> = (args) => <SurveyCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  data: {
    id: 'a',
    thumbnail: '1376585075100.jpg',
    contents: '1800만원으로 뭐삼',
    commentCount: 24,
    created: new Date(),
    likeCount: 240,
    user: { name: '물티슈' },
    votes: [],
  },
}
