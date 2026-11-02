import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import incidentPage from '../../client/index.html'

UiPage({
    $id: Now.ID['incident-manager'],
    endpoint: 'x_0221_fmqa_incident_manager.do',
    description: 'Incident Response Manager UI Page',
    category: 'general',
    html: incidentPage,
    direct: true,
})
