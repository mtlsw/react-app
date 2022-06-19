import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Authentication from '.'

export default {
  title: 'container/Authentication',
  component: Authentication,
} as ComponentMeta<typeof Authentication>

const Template: ComponentStory<typeof Authentication> = (args) => <Authentication {...args} />

export const Basic = Template.bind({})
Basic.args = {}
