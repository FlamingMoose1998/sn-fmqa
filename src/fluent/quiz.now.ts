import { Table, StringColumn, DateColumn, ReferenceColumn } from '@servicenow/sdk/core'

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
            mandatory: true,
        }),
        date: DateColumn({
            label: 'Date',
        }),
        audience: ReferenceColumn({
            label: 'Audience',
            referenceTable: 'x_0221_fmqa_audience',
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 4000,
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
        number: 69,
        numberOfDigits: 6,
        prefix: 'QUIZ',
    },
})
