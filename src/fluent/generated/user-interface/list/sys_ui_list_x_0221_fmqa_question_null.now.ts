import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_question',
    view: default_view,
    columns: ['answer', 'category', 'difficulty', 'filename', 'fullscreen', 'media_type', 'p1', 'p2', 'p3', 'p4'],
})
