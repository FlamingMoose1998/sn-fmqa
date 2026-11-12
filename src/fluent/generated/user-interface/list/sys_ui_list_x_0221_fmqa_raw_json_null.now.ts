import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_raw_json',
    view: default_view,
    columns: ['name', 'json'],
})
