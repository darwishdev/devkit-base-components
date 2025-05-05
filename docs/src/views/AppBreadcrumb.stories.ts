
import { AppBreadcrumb } from 'devkit-base-components';
import type { Meta, StoryObj } from '@storybook/vue3';
import type { MenuItem } from 'primevue/menuitem';

const meta: Meta<typeof AppBreadcrumb> = {
  title: 'Base Components/AppBreadcrumb',
  component: AppBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' }
  },
  args: {
    items: [
      { label: 'Users', icon: 'group_users', to: '/users' },
      { label: 'Ahmed', icon: 'user_preferences' }
    ] as MenuItem[]
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// 🔹 Default Story
export const Default: Story = {
  render: (args) => ({
    components: { AppBreadcrumb },
    setup() {
      return { args };
    },
    template: `<AppBreadcrumb v-bind="args" />`
  })
};
