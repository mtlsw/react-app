import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchTextField from '.'

export default {
  title: 'components/molecule/SearchTextField',
  component: SearchTextField,
  argTypes: {
    onClickSearch: {
      action: 'onClickSearch',
    },
  },
} as ComponentMeta<typeof SearchTextField>

const Template: ComponentStory<typeof SearchTextField> = (args) => <SearchTextField {...args} />

export const Basic = Template.bind({})
Basic.args = {}
