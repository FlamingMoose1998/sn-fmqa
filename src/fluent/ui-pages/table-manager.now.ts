import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import tableManagerPage from '../../client/pages/tableManager/index.html'

UiPage({
    $id: Now.ID['table-manager'],
    endpoint: 'x_0221_fmqa_table_manager.do',
    description: 'Table Manager UI Page',
    category: 'general',
    html: tableManagerPage,
    direct: true,
})
