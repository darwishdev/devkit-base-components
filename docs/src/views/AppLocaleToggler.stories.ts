
import { AppLocaleToggler } from 'devkit-base-components'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof AppLocaleToggler> = {
  title: 'Base Components/AppLocaleToggler',
  component: AppLocaleToggler,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon to display on the toggle button'
    }
  },
  args: {
    icon: 'globe'
  },
  parameters: {
    controls: { expanded: true }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// 🔹 Default usage
export const Default: Story = {
  render: (args) => ({
    components: { AppLocaleToggler },
    setup() {
      return { args }
    },
    template: `<AppLocaleToggler v-bind="args" />`
  })
}

// 🔹 Custom icon
export const CustomIcon: Story = {
  render: (args) => ({
    components: { AppLocaleToggler },
    setup() {
      return { args }
    },
    template: `<AppLocaleToggler v-bind="args" />`
  }),
  args: {
    icon: 'pi pi-language'
  }
}

// 🔹 Custom slot
export const WithSlot: Story = {
  render: (args) => ({
    components: { AppLocaleToggler },
    setup() {
      return { args }
    },
    template: `
      <AppLocaleToggler v-bind="args">
        <template #default="{ toggleLocale }">
          <AppBtn :action="toggleLocale" :icon="globe" label="switch language" labeAr="غير اللغة">
          </AppBtn>
        </template>
      </AppLocaleToggler>
    `
  })
}

