import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_round = Table({
    name: 'x_0221_fmqa_round',
    label: 'Round',
    schema: {
        type: ChoiceColumn({
            label: 'Type',
            choices: {
                normal: {
                    label: 'Normal',
                    sequence: 2,
                },
                '1234': {
                    label: '1234',
                    sequence: 1,
                },
                '1ak': {
                    label: '1ak',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        theme: StringColumn({
            label: 'Theme',
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
