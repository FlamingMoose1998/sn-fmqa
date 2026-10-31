import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['cb275db4839c1f90429b6260ceaad346'],
    name: 'NumberGenerator',
    script: Now.include('./sys_script_include_cb275db4839c1f90429b6260ceaad346.server.js'),
    apiName: 'x_0221_fmqa.NumberGenerator',
    clientCallable: false,
    mobileCallable: false,
    accessibleFrom: 'public',
    active: true,
    protectionPolicy: 'read',
})
