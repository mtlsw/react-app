import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CommentCard from '.'

export default {
  title: 'components/organism/CommentCard',
  component: CommentCard,
  argTypes: {
    onClickCard: {
      action: 'onClickCard',
    },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Basic = Template.bind({})
Basic.args = {
  data: {
    id: 1,
    thumbnail: '1376585075100.jpg',
    contents: '1800만원으로 뭐삼',
    commentCount: 24,
    registDate: new Date(),
    thumbUpCount: 240,
    userName: '물티슈',
    nestedCommentId: 1,
  },
}
