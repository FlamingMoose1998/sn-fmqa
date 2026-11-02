import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['615fc2b583d497d0429b6260ceaad3f4'],
    name: 'ioQuestion',
    script: Now.include('./sys_script_include_615fc2b583d497d0429b6260ceaad3f4.server.js'),
    apiName: 'x_0221_fmqa.ioQuestion',
    clientCallable: false,
    mobileCallable: false,
    active: true,
    protectionPolicy: 'read',
})
