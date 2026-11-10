import { default_view, Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['abe390738310d714429b6260ceaad3f1'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_0221_fmqa_raw_json',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['a7e3987b8350d714429b6260ceaad315'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 0,
        sys_ui_section: 'abe390738310d714429b6260ceaad3f1',
    },
})
Record({
    $id: Now.ID['afe3987b8350d714429b6260ceaad316'],
    table: 'sys_ui_element',
    data: {
        element: 'json',
        position: 1,
        sys_ui_section: 'abe390738310d714429b6260ceaad3f1',
    },
})
