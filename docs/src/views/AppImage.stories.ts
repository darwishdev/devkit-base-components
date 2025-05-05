
import { AppImage } from 'devkit-base-components'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof AppImage> = {
  title: 'Base Components/AppImage',
  component: AppImage,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text', description: 'Image source (relative or absolute)' },
    preview: { control: 'boolean', description: 'Enable image preview on click' }
  },
  args: {
    src: 'images/avatar4.webp',
    preview: false
  },
  parameters: {
    controls: { sort: 'requiredFirst', expanded: true }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// 🔹 Template
const Template: Story = {
  render: (args) => ({
    components: { AppImage },
    setup() {
      return { args }
    },
    template: `<AppImage v-bind="args" />`
  })
}

// 🔹 Stories
export const Default: Story = {
  ...Template
}

export const ExternalImage: Story = {
  ...Template,
  args: {
    src: 'https://picsum.photos/300/200',
  }
}

export const WithFallback: Story = {
  ...Template,
  args: {
    src: 'images/no-exist.webp',
  }
}

export const PreviewEnabled: Story = {
  ...Template,
  args: {
    src: 'images/avatar2.webp',
    preview: true
  }
}

