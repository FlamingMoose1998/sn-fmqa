import React from 'react'
import QuizListItem from './quizListItem'

export default function QuizList({ quizList }) {
    return (
        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {quizList.map((quiz, index) => (
                <QuizListItem key={quiz.sys_id?.value ?? index} quiz={quiz} />
            ))}
        </div>
    )
}
