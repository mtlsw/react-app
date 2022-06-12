import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Comment from '.'

export default {
  title: 'container/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

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
