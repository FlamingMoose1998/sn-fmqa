import { default_view, Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9abae3d483e01310429b6260ceaad3d8'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_0221_fmqa_qa',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['62bae3d483e01310429b6260ceaad3e1'],
    table: 'sys_ui_element',
    data: {
        element: 'answer',
        position: 0,
        sys_ui_section: '9abae3d483e01310429b6260ceaad3d8',
    },
})
Record({
    $id: Now.ID['aebae3d483e01310429b6260ceaad3e2'],
    table: 'sys_ui_element',
    data: {
        element: 'question',
        position: 1,
        sys_ui_section: '9abae3d483e01310429b6260ceaad3d8',
    },
})
Record({
    $id: Now.ID['6abae3d483e01310429b6260ceaad3e3'],
    table: 'sys_ui_element',
    data: {
        element: 'language',
        position: 2,
        sys_ui_section: '9abae3d483e01310429b6260ceaad3d8',
    },
})
