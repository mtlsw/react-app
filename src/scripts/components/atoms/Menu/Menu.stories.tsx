import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from './Menu'

export default {
  title: 'components/atoms/Menu',
  component: Menu,
  argTypes: {},
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: [
    <Menu.MenuItem key="test-1">test 1</Menu.MenuItem>,
    <Menu.MenuItem key="test-2">test 2</Menu.MenuItem>,
  ],
}
