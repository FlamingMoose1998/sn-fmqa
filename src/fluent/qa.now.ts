import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_qa = Table({
    name: 'x_0221_fmqa_qa',
    label: 'QA',
    display: 'question',
    schema: {
        question: StringColumn({
            label: 'Question',
            maxLength: 400,
        }),
        answer: StringColumn({
            label: 'Answer',
            maxLength: 400,
        }),
        language: ChoiceColumn({
            label: 'Language',
            choices: {
                en: {
                    label: 'English',
                    sequence: 1,
                },
                nl: {
                    label: 'Nederlands',
                    sequence: 2,
                },
            },
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
