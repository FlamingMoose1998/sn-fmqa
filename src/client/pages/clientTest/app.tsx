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
    const list = await getQuestions({ text: 'Frankrijk'})
    console.log('list in run', list);
}
