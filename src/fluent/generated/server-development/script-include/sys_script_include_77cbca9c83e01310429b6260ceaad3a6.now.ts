import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['77cbca9c83e01310429b6260ceaad3a6'],
    name: 'DataTools',
    script: Now.include('./sys_script_include_77cbca9c83e01310429b6260ceaad3a6.server.js'),
    apiName: 'x_0221_fmqa.DataTools',
    clientCallable: false,
    mobileCallable: false,
    accessibleFrom: 'public',
    active: true,
    protectionPolicy: 'read',
})
