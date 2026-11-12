import { Table, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_round_question = Table({
    name: 'x_0221_fmqa_round_question',
    label: 'Round Question',
    schema: {
        round: ReferenceColumn({
            label: 'Round',
            referenceTable: 'x_0221_fmqa_round',
            mandatory: true,
            maxLength: 32,
        }),
        question: ReferenceColumn({
            label: 'Question',
            referenceTable: 'x_0221_fmqa_question',
            mandatory: true,
            maxLength: 32,
        }),
        number: IntegerColumn({
            label: 'Question Number',
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
    index: [
        {
            name: 'index',
            unique: false,
            element: 'question',
        },
        {
            name: 'index2',
            unique: false,
            element: 'round',
        },
    ],
})
