import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import overview from '../../client/pages/overview/index.html'

UiPage({
    $id: Now.ID['overview'],
    endpoint: 'x_0221_fmqa_ws_overview.do',
    description: 'overview',
    category: 'general',
    html: overview,
    direct: true,
})
