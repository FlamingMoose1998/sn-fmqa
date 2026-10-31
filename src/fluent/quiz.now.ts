import { Table, StringColumn, DateColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_quiz = Table({
    name: 'x_0221_fmqa_quiz',
    label: 'Quiz',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        number: StringColumn({
            label: 'Number',
            maxLength: 40,
        }),
        date: DateColumn({
            label: 'Date',
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
    autoNumber: {
        number: 6,
        numberOfDigits: 6,
        prefix: 'QUIZ',
    },
})
