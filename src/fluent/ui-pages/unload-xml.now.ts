import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import unloadXmlPage from '../../client/pages/unloadXml/index.html'

UiPage({
    $id: Now.ID['unload-xml'],
    endpoint: 'x_0221_fmqa_ws_unload_xml.do',
    description: 'Unload xml data',
    category: 'general',
    html: unloadXmlPage,
    direct: true,
})
