
import { AppMenu } from 'devkit-base-components'
import type { Meta, StoryObj } from '@storybook/vue3'
import type { AppMenuProps } from 'devkit-base-components'
import type { MenuItem } from 'primevue/menuitem';

const meta: Meta<typeof AppMenu> = {
  title: 'Base Components/AppMenu',
  component: AppMenu,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    isVertical: { control: 'boolean' },
    isCollabsable: { control: 'boolean' },
    useDrawerOnMobile: { control: 'boolean' },
    drawerProps: { control: 'object' },
    breakpoint: { control: 'number' },
    logo: { control: 'object' }
  },
  args: {
    useDrawerOnMobile: true,
    items: [
      {
        label: 'Home',
        labelAr: 'الرئيسية',
        icon: 'pi pi-home',
        command: () => alert('Home clicked')
      } as MenuItem & {
        labelAr?: string;
      },
      {
        label: 'Settings',
        labelAr: 'الإعدادات',
        icon: 'pi pi-cog',
        items: [
          { label: 'Profile', icon: 'pi pi-user' },
          { label: 'Security', icon: 'pi pi-lock' }
        ]
      }
    ],
    isVertical: true,
    isCollabsable: true,
    breakpoint: 768,
    logo: 'https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png'
  },
  parameters: {
    controls: { expanded: true }
  }
}

export default meta
type Story = StoryObj<typeof meta>
type AppMenuArgs = AppMenuProps

// 🔹 Default Story
export const Default: Story = {
  render: (args: AppMenuArgs) => ({
    components: { AppMenu },
    setup() {
      return { args }
    },
    template: `<AppMenu v-bind="args" />`
  })
}
export const VerticalWithDrawer: Story = {
  args: {
    isVertical: true,
    useDrawerOnMobile: true
  }
}

// 🔹 Vertical + No Drawer
export const VerticalWithoutDrawer: Story = {
  args: {
    isVertical: true,
    useDrawerOnMobile: false
  }
}

// 🔹 Horizontal + Drawer
export const HorizontalWithDrawer: Story = {
  args: {
    isVertical: false,
    useDrawerOnMobile: true
  }
}

// 🔹 Horizontal + No Drawer
export const HorizontalWithoutDrawer: Story = {
  args: {
    isVertical: false,
    useDrawerOnMobile: false
  }
}
// 🔹 With Slots
export const WithSlots: Story = {
  render: (args: AppMenuArgs) => ({
    components: { AppMenu },
    setup() {
      return { args }
    },
    template: `
      <AppMenu v-bind="args">
        <template #logo>
          <div class="text-xl text-black font-bold px-4 py-2">Darwish dev</div>
        </template>
        <template #item="{ item, label, props, root, hasSubmenu }">
          <div v-bind="props" class="flex items-center gap-2 text-blue-600">
            <span>{{ typeof label === 'function' ? label() : label }}</span>
          </div>
        </template>

        <template #end>
          <div class="p-2 text-black">Version 1.0 </div>
<h2>asd</h2>
        </template>

        <template #mobileToggler="{ toggle }">
          <button class="p-2 bg-blue-100 rounded" @click="toggle">☰ Toggle Menu</button>
        </template>

        <template #collabseToggler="{ toggle }">
          <button class="p-2 bg-green-100 rounded" @click="toggle">⇔ Collapse</button>
        </template>
      </AppMenu>
    `
  })
}

