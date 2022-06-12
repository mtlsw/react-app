import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NestedCommentList from '.'

export default {
  title: 'container/NestedCommentList',
  component: NestedCommentList,
} as ComponentMeta<typeof NestedCommentList>

const Template: ComponentStory<typeof NestedCommentList> = (args) => <NestedCommentList {...args} />

export const Basic = Template.bind({})
Basic.args = {
  commentId: 'a',
}
