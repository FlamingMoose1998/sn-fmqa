import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_quiz_round',
    view: default_view,
    parent: 'x_0221_fmqa_quiz',
    columns: ['number', 'round.type', 'round.theme'],
})
