import { default_view, List } from '@servicenow/sdk/core'

List({
    table: 'x_0221_fmqa_imp_quiz',
    view: default_view,
    columns: [
        'sys_import_row',
        'sys_import_set',
        'sys_import_state',
        'sys_target_table',
        'sys_target_sys_id',
        'sys_row_error',
    ],
})
