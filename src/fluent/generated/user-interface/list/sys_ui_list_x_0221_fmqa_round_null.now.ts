import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_round',
    view: default_view,
    columns: ['theme', 'type'],
})
