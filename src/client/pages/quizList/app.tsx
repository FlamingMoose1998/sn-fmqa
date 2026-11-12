import React, { useState, useEffect, useMemo } from 'react'
import { TableService } from '../../services/TableService'
import QuizList from '../../components/quizList/quizList'
import './app.css'


export default function App() {
    const [quizList, setQuizList] = useState([]);
    const quizListService = useMemo(() => new TableService('x_0221_fmqa_quiz'), [])

    const refresh = async () => {
        const data = await quizListService.list({ 
            sysparm_fields: 'sys_id,name,number,date,audience',
            sysparm_display_value: 'all',
        });
        setQuizList(data)
        console.log('app', quizList)
    }
    useEffect(() => {
        void refresh();
    
    }, [])
    console.log('app', quizList)
    return (
        <QuizList quizList={quizList} />
    )
}
