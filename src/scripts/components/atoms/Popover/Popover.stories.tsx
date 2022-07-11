import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Popover from './Popover'

export default {
  title: 'components/atoms/Popover',
  component: Popover,
  argTypes: {},
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: <div>This is test child.</div>,
}
