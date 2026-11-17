import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import clientTest from '../../client/pages/clientTest/index.html'

UiPage({
    $id: Now.ID['client-test'],
    endpoint: 'x_0221_fmqa_ws_client_test.do',
    description: 'client test',
    category: 'general',
    html: clientTest,
    direct: true,
})
