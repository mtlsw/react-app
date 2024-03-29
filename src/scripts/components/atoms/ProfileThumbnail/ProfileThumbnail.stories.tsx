import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfileThumbnail from './ProfileThumbnail'

export default {
  title: 'components/atoms/ProfileThumbnail',
  component: ProfileThumbnail,
  argTypes: {
    size: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
      defaultValue: 'm',
    },
  },
} as ComponentMeta<typeof ProfileThumbnail>

const Template: ComponentStory<typeof ProfileThumbnail> = (args) => <ProfileThumbnail {...args} />

export const Basic = Template.bind({})
Basic.args = {
  src: '1376585075100.jpg',
}
