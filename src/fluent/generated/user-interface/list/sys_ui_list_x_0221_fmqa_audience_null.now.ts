import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_audience',
    view: default_view,
    columns: ['name'],
})
