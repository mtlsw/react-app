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
    id: 'a',
    user: { name: '이상훈TV' },
    created: new Date(),
    contents: '와 진짜 박진감 넘치네~\n테슬라 오토파일럿 너무 좋구만요',
    likeCount: 154,
    nestedCommentCount: 12,
  },
}
