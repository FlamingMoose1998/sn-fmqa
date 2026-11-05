import { Table, ReferenceColumn, IntegerColumn } from '@servicenow/sdk/core';

export const x_0221_fmqa_quiz_round = Table({
    name: 'x_0221_fmqa_quiz_round',
    label: 'Quiz Round',
    schema: {
        quiz: ReferenceColumn({
            label: 'Quiz',
            referenceTable: 'x_0221_fmqa_quiz',
            mandatory: true,
        }),
        round: ReferenceColumn({
            label: 'Round',
            referenceTable: 'x_0221_fmqa_round',
            mandatory: true,
        }),
        number: IntegerColumn({
            label: 'Round Number',
        })
    },
});
