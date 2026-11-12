import { Table, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_quiz_round = Table({
    name: 'x_0221_fmqa_quiz_round',
    label: 'Quiz Round',
    schema: {
        quiz: ReferenceColumn({
            label: 'Quiz',
            referenceTable: 'x_0221_fmqa_quiz',
            mandatory: true,
            maxLength: 32,
        }),
        round: ReferenceColumn({
            label: 'Round',
            referenceTable: 'x_0221_fmqa_round',
            mandatory: true,
            maxLength: 32,
        }),
        number: IntegerColumn({
            label: 'Round Number',
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
            element: 'quiz',
        },
        {
            name: 'index2',
            unique: false,
            element: 'round',
        },
    ],
})
