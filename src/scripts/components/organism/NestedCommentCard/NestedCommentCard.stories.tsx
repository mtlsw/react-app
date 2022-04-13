import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NestedCommentCard from '.'

export default {
  title: 'components/organism/NestedCommentCard',
  component: NestedCommentCard,
  argTypes: {
    onClickCard: {
      action: 'onClickCard',
    },
  },
} as ComponentMeta<typeof NestedCommentCard>

const Template: ComponentStory<typeof NestedCommentCard> = (args) => <NestedCommentCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  data: {
    id: 1,
    contents: '1800만원으로 뭐삼',
    registDate: new Date(),
    thumbUpCount: 240,
    userName: '물티슈',
  },
}
