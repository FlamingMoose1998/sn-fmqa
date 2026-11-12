import { List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_audience',
    view: 'sys_ref_list',
    columns: ['name'],
})
