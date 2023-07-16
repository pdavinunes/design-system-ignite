import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@dnx-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/pdavinunes.png',
    alt: 'Davi Nunes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Davi Nunes',
  },
}
