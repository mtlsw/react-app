import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LinearBar from './LinearBar'

export default {
  title: 'components/atoms/LinearBar',
  component: LinearBar,
} as ComponentMeta<typeof LinearBar>

const Template: ComponentStory<typeof LinearBar> = (args) => <LinearBar {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'XM3 풀옵',
  value: 72,
}
