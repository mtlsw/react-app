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
    id: 'a',
    user: { name: '이상훈TV' },
    created: new Date(),
    contents: '와 진짜 박진감 넘치네~\n테슬라 오토파일럿 너무 좋구만요',
    likeCount: 154,
  },
}
