import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MenuItem from './MenuItem'

export default {
  title: 'components/atoms/MenuItem',
  component: MenuItem,
  argTypes: {},
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: <div>This is test child.</div>,
}
