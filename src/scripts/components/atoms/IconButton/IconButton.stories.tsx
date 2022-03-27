import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import IconButton from './IconButton'

export default {
  title: 'components/atoms/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      options: [
        'search',
        'alarmOn',
        'alarmOff',
        'thumbUp',
        'thumbUpFilled',
        'thumbDown',
        'thumbDownFilled',
        'share',
        'comment',
      ],
      control: 'select',
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />

export const Basic = Template.bind({})
Basic.args = {}
