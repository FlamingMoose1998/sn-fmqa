import { Table, StringColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_raw_json = Table({
    name: 'x_0221_fmqa_raw_json',
    label: 'Raw JSON',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        json: StringColumn({
            label: 'JSON',
            maxLength: 10000,
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
