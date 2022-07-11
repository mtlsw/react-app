import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from '.'

export default {
  title: 'components/atoms/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Basic = Template.bind({})
Basic.args = {
  options: [
    { label: '자동차', value: 'car' },
    { label: '바이크', value: 'bike' },
  ],
  value: { label: '자동차', value: 'car' },
}
