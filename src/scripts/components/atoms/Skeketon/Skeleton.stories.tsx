import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Skeleton from '.'

export default {
  title: 'components/atoms/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Basic = Template.bind({})
Basic.args = {}

export const FixSize = Template.bind({})
FixSize.args = {
  width: 100,
  height: 50,
}
