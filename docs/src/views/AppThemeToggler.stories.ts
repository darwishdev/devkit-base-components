
import { AppThemeToggler } from 'devkit-base-components'
import type { Meta, StoryObj } from '@storybook/vue3'
const meta: Meta<typeof AppThemeToggler> = {
  title: 'Base Components/AppThemeToggler',
  component: AppThemeToggler,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'The class name that toggles dark mode (e.g., "dark")'
    },
    darkIcon: {
      control: 'text',
      description: 'Icon to use when in dark mode'
    },
    lightIcon: {
      control: 'text',
      description: 'Icon to use when in light mode'
    },
    callBack: {
      control: false,
      description: 'Callback function triggered on theme change'
    }
  },
  args: {
    className: 'dark',
    darkIcon: 'sun',
    lightIcon: 'moon',
    callBack: (mode: 'dark' | 'light') => {
      console.log(`Theme changed to ${mode}`)
    }
  },
  parameters: {
    controls: { expanded: true }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => ({
    components: { AppThemeToggler },
    setup() {
      return { args }
    },
    template: `<AppThemeToggler v-bind="args" />`
  })
}

export const Default: Story = {
  ...Template
}

export const CustomIcons: Story = {
  ...Template,
  args: {
    darkIcon: 'pi pi-star',
    lightIcon: 'pi pi-moon'
  }
}

export const WithSlot: Story = {
  render: (args) => ({
    components: { AppThemeToggler },
    setup() {
      return { args }
    },
    template: `
      <AppThemeToggler v-bind="args">
        <template #default="{ toggle }">
          <button @click="toggle" style="padding: 0.5rem 1rem; background: teal; color: white; border: none; border-radius: 4px;">
            Toggle Theme (Custom Button)
          </button>
        </template>
      </AppThemeToggler>
    `
  })
}
