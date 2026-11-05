import React from 'react'
import { Card } from '@servicenow/react-components/Card'
import { CardHeader } from '@servicenow/react-components/CardHeader'

type SidebarColor = 'blue' | 'purple' | 'orange' | 'green' | 'teal' | 'gray';

const AUDIENCE_COLOR_MAP: Record<string, SidebarColor> = {
    asn: 'blue',
    dijkje: 'purple',
    fmth: 'orange',
    klok: 'green',
    mets: 'teal',
}

function getAudienceColor(audience: string): SidebarColor {
    return AUDIENCE_COLOR_MAP[audience.toLowerCase()] ?? 'gray'
}

export default function QuizListItem({ quiz }) {
    const name = quiz.name?.display_value ?? quiz.name ?? ''
    const date = quiz.date?.display_value ?? quiz.date ?? ''
    const audience = quiz.audience?.display_value ?? quiz.audience ?? ''

    return (
        <Card
            size="md"
            sidebar={{ color: getAudienceColor(audience), variant: 'primary' }}
        >
            <CardHeader
                heading={{ label: name, level: 3, size: 'md' }}
                caption={{ label: date ? `${date}` : '' }}
                tagline={{ label: audience || 'No audience' }}
            />
        </Card>
    )
}
