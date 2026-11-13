import React, { useState, useEffect } from 'react'
import { Button } from '@servicenow/react-components/Button'

import { Modal } from '@servicenow/react-components/Modal'
import { Loader } from '@servicenow/react-components/Loader'
import { fetchCount, deleteAllRecords } from './api'

interface Props {
    label: string
    table: string
}

export default function TableRow({ label, table }: Props) {
    const [count, setCount] = useState<number | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const loadCount = async () => {
        setCount(null)
        const c = await fetchCount(table)
        setCount(c)
    }

    useEffect(() => { void loadCount() }, [])

    const handleDelete = async () => {
        setModalOpen(false)
        setDeleting(true)
        await deleteAllRecords(table)
        setDeleting(false)
        await loadCount()
    }

    const listUrl = `/${table}_list.do?sysparm_clear_stack=true`

    return (
        <tr>
            <td className="tm-cell">
                <span className="tm-label">{label}</span>
                <span className="tm-tech">[{table}]</span>
            </td>
            <td className="tm-cell tm-center">
                {count === null ? (
                    <Loader label="Loading..." />
                ) : (
                    <a className="tm-link" href={listUrl} target="_blank" rel="noopener noreferrer">{count}</a>
                )}
            </td>
            <td className="tm-cell tm-center">
                {deleting ? (
                    <Loader label="Deleting..." />
                ) : (
                    <Button
                        label="Delete All"
                        variant="primary-negative"
                        size="sm"
                        disabled={count === 0 || count === null}
                        onClicked={() => setModalOpen(true)}
                    />
                )}
                <Modal
                    opened={modalOpen}
                    headerLabel="Confirm Delete"
                    content={`Delete all ${count ?? 0} record(s) from ${label}?`}
                    size="sm"
                    footerActions={[
                        { label: 'Cancel', variant: 'secondary' },
                        { label: 'Delete', variant: 'primary-negative' },
                    ]}
                    onOpenedSet={(e: any) => setModalOpen(e.detail.payload.value)}
                    onFooterActionClicked={(e: any) => {
                        if (e.detail.payload.action.label === 'Delete') {
                            void handleDelete()
                        } else {
                            setModalOpen(false)
                        }
                    }}
                />
            </td>
        </tr>
    )
}
