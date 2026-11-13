import React, { useState, useEffect, useMemo } from 'react'
import './app.css'
import { Button } from '@servicenow/react-components/Button'
import { TableService } from '../../services/TableService'
import { downloadXml, unloadRecord, unloadRecords, unloadMultipleTables } from '../../services/xml'

export default function App() {
    return (
        <DownloadXml />
    )
}

function DownloadXml(){
    const TestUnloadSingle = async () => {
        console.log('on click')
        const testIncSysId = '9e7f9864532023004247ddeeff7b121f'

        const ts = new TableService('incident');
        const inc2 = await ts.get(testIncSysId)
        console.log(inc2)

        const xml = unloadRecord('incident', inc2);
        console.log(xml)

        downloadXml('myUnload.xml', xml);
    }

    function unloadAllQuizData(){
        const tableList = [
            'quiz',
            'round',
            'question',
            'qa',
            'quiz_round',
            'round_question',
            'audience', 
            'category',
        ].map(short => `x_0221_fmqa_${short}`);

        const promiseList = tableList.map(table => {
            const ts = new TableService(table);
            const recordList = ts.list()

            return recordList;
        })

        Promise.all(promiseList).then(result => {
            const list = result.map((recordList, index) => {
                const table = tableList[index];

                return {
                    table,
                    recordList,
                }
            })

            console.log(list)

            const xmlString = unloadMultipleTables(list)
            console.log(xmlString)
            
            downloadXml('unloadList.xml', xmlString);
        });
    }

    return <>
        <Button onClicked={TestUnloadSingle}>Unload data - single</Button>
        <Button onClicked={unloadAllQuizData}>Unload all quiz data</Button>
    </>
}