import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Toast from '.'

export default {
  title: 'container/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>

const Template: ComponentStory<typeof Toast> = (args) => <Toast />

export const Basic = Template.bind({})
Basic.args = {}
