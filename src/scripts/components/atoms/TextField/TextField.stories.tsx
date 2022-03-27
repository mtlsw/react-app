import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextField from '.'

export default {
  title: 'components/atoms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Search..',
}
