import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['3065279883a01310429b6260ceaad370'],
    table: 'x_0221_fmqa_question',
    shortDescription: 'Show fields based on question type',
    isolateScript: true,
    conditions: 'type=1234^EQ',
    scriptTrue: 'function onCondition() {}',
    scriptFalse: 'function onCondition() {}',
    actions: [
        {
            field: 'p1',
            visible: true,
            table: 'x_0221_fmqa_question',
        },
        {
            field: 'p2',
            visible: true,
            table: 'x_0221_fmqa_question',
        },
        {
            field: 'p4',
            visible: true,
            table: 'x_0221_fmqa_question',
        },
        {
            field: 'qa',
            visible: false,
            table: 'x_0221_fmqa_question',
        },
        {
            field: 'p3',
            visible: true,
            table: 'x_0221_fmqa_question',
        },
    ],
})
