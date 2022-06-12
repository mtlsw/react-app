import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CommentList from '.'

export default {
  title: 'container/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Basic = Template.bind({})
Basic.args = {
  surveyId: 'a',
}
