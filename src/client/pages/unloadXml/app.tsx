import React, { useState, useEffect, useMemo } from 'react'
import './app.css'
import { Button } from '@servicenow/react-components/Button'
import { TableService } from '../../services/TableService'
import { downloadXml, jsonToUnloadXml } from '../../services/xml'

export default function App() {
    return (
        <DownloadXml />
    )
}

function DownloadXml(){
    const onClick = async () => {
        console.log('on click')
        const testIncSysId = '9e7f9864532023004247ddeeff7b121f'

        const ts = new TableService('incident');
        const inc2 = await ts.get(testIncSysId)
        console.log(inc2)

        const xml = jsonToUnloadXml('incident', inc2);
        console.log(xml)

        downloadXml('myUnload.xml', xml);
    }
    return <>
        <Button onClicked={onClick}>Unload data</Button>
    </>
}