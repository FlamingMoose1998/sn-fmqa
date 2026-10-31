import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['6280027483145f90429b6260ceaad3f3'],
    type: 'onLoad',
    table: 'x_0221_fmqa_quiz',
    isolateScript: true,
    script: Now.include('./sys_script_client_6280027483145f90429b6260ceaad3f3.client.js'),
    name: 'Aufofill fields',
    uiType: 'all',
})
