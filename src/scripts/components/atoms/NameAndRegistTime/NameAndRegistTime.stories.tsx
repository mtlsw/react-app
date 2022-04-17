import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NameAndRegistTime from './NameAndRegistTime'

export default {
  title: 'components/atoms/NameAndRegistTime',
  component: NameAndRegistTime,
} as ComponentMeta<typeof NameAndRegistTime>

const Template: ComponentStory<typeof NameAndRegistTime> = (args) => <NameAndRegistTime {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: '물티슈',
  date: new Date(),
}
