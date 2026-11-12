import '@servicenow/sdk/global'
import { RestApi } from '@servicenow/sdk/core'

RestApi({
    $id: Now.ID['get-xml'],
    name: 'Get XML',
    serviceId: 'get_xml',
    consumes: 'application/json',
    produces: 'application/json',
    shortDescription: 'API to export xml',
    routes: [
        {
            $id: Now.ID['get-xml-route'],
            name: 'Get XML',
            method: 'GET',
            path: '/xml',
            shortDescription: 'Get xml',
            script: `(function process(request, response) {
    response.setBody({ ok: true, xml: 'fubar' });
})(request, response)`,
            consumes: 'application/json',
            produces: 'application/json',
        },
    ],
})
