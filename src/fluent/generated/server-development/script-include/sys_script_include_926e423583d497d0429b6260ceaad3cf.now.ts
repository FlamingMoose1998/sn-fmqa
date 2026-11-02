import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['926e423583d497d0429b6260ceaad3cf'],
    name: 'io',
    script: Now.include('./sys_script_include_926e423583d497d0429b6260ceaad3cf.server.js'),
    apiName: 'x_0221_fmqa.io',
    clientCallable: false,
    mobileCallable: false,
    active: true,
    protectionPolicy: 'read',
})
