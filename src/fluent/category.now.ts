import { Table, StringColumn, GenericColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_category = Table({
    name: 'x_0221_fmqa_category',
    label: 'Category',
    display: 'label',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        label: StringColumn({
            label: 'Label',
            maxLength: 40,
            mandatory: true,
        }),
        color: GenericColumn({
            columnType: 'color',
            label: 'Color',
            maxLength: 40,
        }),
    },
    actions: {
        read: true,
        update: true,
        delete: false,
        create: true,
    },
    allowClientScripts: true,
    allowConfiguration: false,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
})
