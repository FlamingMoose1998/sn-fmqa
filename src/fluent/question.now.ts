import { Table, StringColumn, BooleanColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const x_0221_fmqa_question = Table({
    name: 'x_0221_fmqa_question',
    label: 'Question',
    display: 'question',
    schema: {
        question: StringColumn({
            label: 'Question',
            maxLength: 400,
            mandatory: true,
        }),
        answer: StringColumn({
            label: 'Answer',
            maxLength: 400,
        }),
        qa: ReferenceColumn({
            label: 'QA',
            referenceTable: 'x_0221_fmqa_qa',
        }),
        p1: ReferenceColumn({
            label: 'P1',
            referenceTable: 'x_0221_fmqa_qa',
        }),
        p2: ReferenceColumn({
            label: 'P2',
            referenceTable: 'x_0221_fmqa_qa',
        }),
        p3: ReferenceColumn({
            label: 'P3',
            referenceTable: 'x_0221_fmqa_qa',
        }),
        p4: ReferenceColumn({
            label: 'P4',
            referenceTable: 'x_0221_fmqa_qa',
        }),        
        type: ChoiceColumn({
            label: 'Type',
            choices: {
                normal: 'Normal',
                '1234': '1234',
            },
        }),
        category: ReferenceColumn({
            label: 'Category',
            referenceTable: 'x_0221_fmqa_category',
        }),
        media_type: ChoiceColumn({
            label: 'Media Type',
            choices: {
                image: 'Image',
                audio: 'Audio',
                video: 'Video',
            },
        }),
        filename: StringColumn({
            label: 'Filename',
            maxLength: 400,
        }),
        difficulty: ChoiceColumn({
            label: 'Difficulty',
            choices: {
                1: 'Easy',
                2: 'Medium',
                3: 'Hard',
            },
        }),
        fullscreen: BooleanColumn({
            label: 'Fullscreen',
            default: false,
        }),
    },
});

