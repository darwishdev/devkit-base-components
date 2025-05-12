
import Datalist from "devkit-admin/datalist"
import type { Meta, StoryFn } from "@storybook/vue3"
import { ColumnText } from "devkit-admin/datalist"
import type {
  DatalistColumnsBase,
  DatalistProps,
} from "devkit-admin/datalist"
import type { AccountsSchemaUser, UserListRequest } from "@buf/ahmeddarwish_devkit-api.bufbuild_es/devkit/v1/accounts_user_pb"

const mockRecords = async (req: UserListRequest): Promise<{ records: AccountsSchemaUser[] }> => {
  return {
    records: [
      {
        userId: "1",
        userName: "John Doe",
        userEmail: "john@example.com",
        userPhone: "+123456789",
        userDescription: "Demo user",
        userSecurityLevel: 5,
      } as AccountsSchemaUser,
      {
        userId: "2",
        userName: "Jane Smith",
        userEmail: "jane@example.com",
        userPhone: "+987654321",
        userDescription: "Another demo",
        userSecurityLevel: 3,
      } as AccountsSchemaUser,
    ],
  }
}

const columns: DatalistColumnsBase<AccountsSchemaUser> = {
  userId: new ColumnText("userId", {}),
  userName: new ColumnText("userName", {}),
}

const tableProps: DatalistProps<any, UserListRequest, AccountsSchemaUser> = {
  context: {
    datalistKey: "storybook-user",
    title: "Users",
    rowIdentifier: "userId",
    columns,
    records: mockRecords,
    isExportable: true,
    displayType: "table",
    formSections: {},
    options: {
      title: "Users Table",
      description: "List of users for demonstration",
    },
  },
}

export default {
  title: "Components/Datalist",
  component: Datalist,
} as Meta<typeof Datalist>

const Template: StoryFn<typeof Datalist> = (args) => ({
  components: { Datalist },
  setup() {
    return { args }
  },
  template: `<Datalist v-bind="args.context" />`,
})

export const Default = Template.bind({})
Default.args = {
  context: tableProps.context,
}

