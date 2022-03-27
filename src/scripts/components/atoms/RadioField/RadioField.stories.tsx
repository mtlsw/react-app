import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RadioField from './RadioField'

export default {
  title: 'components/atoms/RadioField',
  component: RadioField,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof RadioField>

const Template: ComponentStory<typeof RadioField> = (args) => <RadioField {...args} />

export const Basic = Template.bind({})
Basic.args = {
  selected: 0,
  children: ['one', 'two'],
  group: 'story',
}
