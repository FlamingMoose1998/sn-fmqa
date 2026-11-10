import React from 'react'
import { Card } from '@servicenow/react-components/Card'
import { HighlightedValue } from '@servicenow/react-components/HighlightedValue'
import './quizListItem.css'

type AudienceColor = 'blue' | 'purple' | 'orange' | 'green' | 'teal' | 'gray';

const AUDIENCE_COLOR_MAP: Record<string, AudienceColor> = {
    asn: 'blue',
    dijkje: 'purple',
    fmth: 'orange',
    klok: 'green',
    mets: 'teal',
}

function getAudienceColor(audience: string): AudienceColor {
    return AUDIENCE_COLOR_MAP[audience.toLowerCase()] ?? 'gray'
}

export default function QuizListItem({ quiz }) {
    const name = quiz.name?.display_value ?? quiz.name ?? ''
    const number = quiz.number?.display_value ?? quiz.number ?? ''
    const date = quiz.date?.display_value ?? quiz.date ?? ''
    const audience = quiz.audience?.display_value ?? quiz.audience ?? ''

    return (
        <Card size="md" sidebar={{ color: getAudienceColor(audience), variant: 'primary' }}>
            <div className="quiz-card-content">
                <div className="quiz-card-top">
                    <span className="quiz-card-number">{number}</span>
                    <HighlightedValue
                        label={audience || 'No audience'}
                        color={getAudienceColor(audience)}
                        variant="secondary"
                        size="sm"
                    />
                </div>
                <h3 className="quiz-card-name">{name}</h3>
                <div className="quiz-card-bottom">
                    <span className="quiz-card-date">{date}</span>
                </div>
            </div>
        </Card>
    )
}
