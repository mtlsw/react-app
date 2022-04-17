import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Comment from '.'

export default {
  title: 'container/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => <Comment />

export const Basic = Template.bind({})
Basic.args = {}
