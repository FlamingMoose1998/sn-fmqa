import React from 'react'

export default function QuizListItem({ quiz }){
    return (<>
        <li>{quiz.name} [{quiz.date}]</li>
    </>)
}