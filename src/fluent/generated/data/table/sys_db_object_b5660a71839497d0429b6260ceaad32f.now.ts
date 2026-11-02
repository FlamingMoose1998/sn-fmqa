import { StringColumn, Table } from '@servicenow/sdk/core'

export const x_0221_fmqa_imp_quiz = Table({
    actions: {
        read: true,
        update: false,
        delete: false,
        create: false,
    },
    allowClientScripts: false,
    allowConfiguration: false,
    allowNewFields: false,
    allowUiActions: false,
    allowWebServiceAccess: true,
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    extends: 'sys_import_set_row',
    label: 'Imp Quiz',
    name: 'x_0221_fmqa_imp_quiz',
    schema: {
        u_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'name',
            },
            label: 'name',
            maxLength: 40,
        }),
        u_date: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'date',
            },
            label: 'date',
            maxLength: 40,
        }),
        u_full_name: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'full name',
            },
            label: 'full name',
            maxLength: 40,
        }),
        u_number_old: StringColumn({
            attributes: {
                edge_encryption_enabled: true,
                import_attribute_name: 'number_old',
            },
            label: 'number_old',
            maxLength: 40,
        }),
    },
})
