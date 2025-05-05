import { AppBtn } from 'devkit-base-components'
import { toggleLocale, cacheHelper } from 'devkit-base-components'
import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const meta: Meta<typeof AppBtn> = {
  title: 'Base Components/AppBtn',
  component: AppBtn,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text', description: 'Icon name' },
    label: { control: 'text', description: 'Label in default locale' },
    labelAr: { control: 'text', description: 'Arabic label' },
    action: { control: 'text', description: 'Action (route/function/url)' },
    size: { control: 'select', options: ['small', 'large'], description: 'Button size' },
    severity: { control: 'select', options: ['secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'], description: 'Severity' },
    variant: { control: 'select', options: ['outlined', 'text', 'link'], description: 'Variant' }
  },
  args: {
    icon: 'send',
    label: 'Submit',
    labelAr: 'إرسال',
    useReset: true,
    size: 'small'
  },
  parameters: {
    controls: { sort: 'requiredFirst', expanded: true }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// 🔹 Template helper
const Template: Story = {
  render: (args) => ({
    components: { AppBtn },
    setup() {
      return { args }
    },
    template: `<AppBtn v-bind="args" />`
  })
}

// 🔹 Stories
export const Default: Story = {
  ...Template
}

export const WithFunctionAction: Story = {
  render: (args) => ({
    components: { AppBtn },
    setup() {
      const clicked = () => alert('Button clicked!')
      return { args: { ...args, action: clicked } }
    },
    template: `<AppBtn v-bind="args" />`
  }),
  args: {
    label: 'Click Me',
    icon: 'send',
    severity: 'success'
  }
}

export const WithRouterLink: Story = {
  args: {
    label: 'Go Home',
    action: '/',
    severity: 'info'
  }
}

export const WithExternalLink: Story = {
  args: {
    label: 'Open Google',
    action: 'https://google.com',
    severity: 'help'
  }
}

export const WithIconSlot: Story = {
  render: (args) => ({
    components: { AppBtn },
    setup() {
      return { args }
    },
    template: `
      <AppBtn v-bind="args">
        <template #icon>
          <span class="pi pi-heart-fill text-red-500"></span>
        </template>
      </AppBtn>
    `
  }),
  args: {
    label: 'Love'
  }
}

export const WithLabelSlot: Story = {
  render: (args) => ({
    components: { AppBtn },
    setup() {
      return { args }
    },
    template: `
      <AppBtn v-bind="args">
        <template #label>
          <span style="font-weight: bold;">Custom Label</span>
        </template>
      </AppBtn>
    `
  }),
  args: {
    icon: 'send'
  }
}

export const WithDefaultSlot: Story = {
  render: (args) => ({
    components: { AppBtn },
    setup() {
      return { args }
    },
    template: `
      <AppBtn v-bind="args">
        <span class="text-blue-600">💡 Custom Content</span>
      </AppBtn>
    `
  })
}

export const WithEndSlot: Story = {
  render: (args) => ({
    components: { AppBtn },
    setup() {
      return { args }
    },
    template: `
      <AppBtn v-bind="args">
        <template #end>
          <span class="pi pi-arrow-right ml-2"></span>
        </template>
      </AppBtn>
    `
  }),
  args: {
    label: 'Continue'
  }
}

export const LocaleToggle: Story = {
  render: (args) => ({
    components: { AppBtn },
    setup() {
      const i18n = useI18n()
      const switchLang = () => toggleLocale({ i18n, cacheHelper }) // dummy cacheHelper for demo
      return { args, switchLang }
    },
    template: `
      <div class="space-y-4">
        <AppBtn v-bind="args" :action="switchLang" />
      </div>
    `
  }),
  args: {
    icon: 'globe',
    label: 'Language',
    labelAr: 'اللغة'
  }
}
