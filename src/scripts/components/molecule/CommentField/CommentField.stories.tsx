import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CommentField from '.'

export default {
  title: 'components/molecule/CommentField',
  component: CommentField,
  argTypes: {
    onClickSearch: {
      action: 'onClickSearch',
    },
  },
} as ComponentMeta<typeof CommentField>

const Template: ComponentStory<typeof CommentField> = (args) => <CommentField {...args} />

export const Basic = Template.bind({})
Basic.args = {}
