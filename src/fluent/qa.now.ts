import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core';

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
                en: 'English',
                nl: 'Nederlands',
            },
        }),
    },
});
