import { Table, StringColumn, BooleanColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_0221_fmqa_question = Table({
    name: 'x_0221_fmqa_question',
    label: 'Question',
    display: 'question',
    schema: {
        qa: ReferenceColumn({
            label: 'QA',
            referenceTable: 'x_0221_fmqa_qa',
            maxLength: 32,
        }),
        p1: ReferenceColumn({
            label: 'P1',
            referenceTable: 'x_0221_fmqa_qa',
            maxLength: 32,
        }),
        p2: ReferenceColumn({
            label: 'P2',
            referenceTable: 'x_0221_fmqa_qa',
            maxLength: 32,
        }),
        p3: ReferenceColumn({
            label: 'P3',
            referenceTable: 'x_0221_fmqa_qa',
            maxLength: 32,
        }),
        p4: ReferenceColumn({
            label: 'P4',
            referenceTable: 'x_0221_fmqa_qa',
            maxLength: 32,
        }),
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
            },
            maxLength: 40,
        }),
        category: ReferenceColumn({
            label: 'Category',
            referenceTable: 'x_0221_fmqa_category',
            maxLength: 32,
        }),
        media_type: ChoiceColumn({
            label: 'Media Type',
            choices: {
                image: {
                    label: 'Image',
                    sequence: 1,
                },
                audio: {
                    label: 'Audio',
                    sequence: 2,
                },
                video: {
                    label: 'Video',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        filename: StringColumn({
            label: 'Filename',
            maxLength: 400,
        }),
        difficulty: ChoiceColumn({
            label: 'Difficulty',
            choices: {
                1: {
                    label: 'Easy',
                    sequence: 1,
                },
                2: {
                    label: 'Medium',
                    sequence: 2,
                },
                3: {
                    label: 'Hard',
                    sequence: 3,
                },
            },
            maxLength: 40,
        }),
        fullscreen: BooleanColumn({
            label: 'Fullscreen',
            default: false,
            maxLength: 40,
        }),
        question: StringColumn({
            mandatory: true,
            maxLength: 400,
        }),
        answer: StringColumn({
            maxLength: 400,
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
            element: 'category',
        },
        {
            name: 'index2',
            unique: false,
            element: 'p1',
        },
        {
            name: 'index3',
            unique: false,
            element: 'p2',
        },
        {
            name: 'index4',
            unique: false,
            element: 'p3',
        },
        {
            name: 'index5',
            unique: false,
            element: 'p4',
        },
        {
            name: 'index6',
            unique: false,
            element: 'qa',
        },
    ],
})
