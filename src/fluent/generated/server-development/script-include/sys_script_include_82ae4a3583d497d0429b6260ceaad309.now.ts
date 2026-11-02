import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['82ae4a3583d497d0429b6260ceaad309'],
    name: 'logger',
    script: Now.include('./sys_script_include_82ae4a3583d497d0429b6260ceaad309.server.js'),
    apiName: 'x_0221_fmqa.logger',
    clientCallable: false,
    mobileCallable: false,
    active: true,
    protectionPolicy: 'read',
})
