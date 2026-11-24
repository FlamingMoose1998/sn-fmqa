import React, { useState, useEffect, useMemo } from 'react'
import './app.css'
import { Button } from '@servicenow/react-components/Button'
import { TableService } from '../../services/TableService.js'
import { getQuestions } from '../../services/QuizService.js'

export default function App() {
    return (
        <ClientTest />
    )
}

function ClientTest(){
    return <>
        <Button onClicked={run}>Get Questions</Button>
    </>
}

async function run(){
    console.log('run')
    const query = 'qa.questionLIKEFrankrijk^ORqa.answerLIKEFrankrijk'
    const list = await getQuestions(query)
    console.log('list in run', list);
}
