import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_qa',
    view: default_view,
    columns: ['answer', 'language', 'question'],
})
