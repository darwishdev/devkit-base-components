
import { AppIcon, iconHelper, type AppIconProps } from 'devkit-base-components'
import type { Meta, StoryObj } from '@storybook/vue3'
const demoSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/></svg>`
iconHelper.iconCreate('circle-icon', demoSvg)
const meta: Meta<typeof AppIcon> = {
  title: 'Base Components/AppIcon',
  component: AppIcon,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text', description: 'Icon name (e.g., pi pi-home)' },
    iconType: {
      control: 'select',
      options: ['primevue', 'svg', undefined],
      description: 'Icon rendering type'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Icon size'
    },
    color: { control: 'color', description: 'Color of the icon' },
    useReset: { control: 'boolean', description: 'Whether to use reset styles' }
  },
  args: {
    icon: 'star',
    iconType: 'primevue',
    size: 'medium',
    useReset: true
  },
  parameters: {
    controls: {
      sort: 'requiredFirst',
      expanded: true
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => ({
    components: { AppIcon },
    setup() {
      return { args }
    },
    template: `
      <AppIcon v-bind="args" />
    `
  })
}

// Stories
export const DefaultIcon: Story = {
  ...Template,
  args: {
    icon: 'star',
    iconType: 'primevue',
    size: 'medium',
    color: '#f39c12'
  }
}

export const SvgIcon: Story = {
  ...Template,
  args: {
    icon: 'circle-icon', // assume this is mapped to an SVG in your system
    iconType: 'svg',
    size: 'large',
    color: '#2ecc71'
  }
}

export const SlotsExample: Story = {
  ...Template,
  args: {
    icon: 'user',
    size: 'large',
    color: '#8e44ad'
  },
  render: (args) => ({
    components: { AppIcon },
    setup() {
      return { args }
    },
    template: `
      <AppIcon v-bind="args">
        <template #top>
          <div style="font-size: 12px; color: #999">Top Label</div>
        </template>
        <template #bottom>
          <div style="font-size: 12px; color: #999">Bottom Note</div>
        </template>
      </AppIcon>
    `
  })
}
