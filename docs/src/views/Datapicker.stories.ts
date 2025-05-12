
import Datalist from "devkit-admin/datalist"
import type { Meta, StoryFn } from "@storybook/vue3"
import { Datepicker } from "devkit-admin/form"

export default {
  title: "Components/Datapicket",
  component: Datepicker,
} as Meta<typeof Datalist>

const Template: StoryFn<typeof Datepicker> = (args) => ({
  components: { Datepicker },
  setup() {
    return { args }
  },
  template: `<Datepicker v-bind="args.context" />`,
})

export const Default = Template.bind({})
Default.args = {
  context: {
    name: 'date'
  }
}
