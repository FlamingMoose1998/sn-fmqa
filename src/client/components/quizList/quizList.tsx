import React from 'react'
import QuizListItem from './quizListItem'

export default function QuizList({ quizList }){
    console.log('QuizList', quizList)
    return (<>
        QuizList
        <ul>
            {quizList.map(quiz => <QuizListItem quiz={quiz} />)}
        </ul>
    </>)
}