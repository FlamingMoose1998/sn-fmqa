import React, { useState, useEffect, useMemo } from 'react'
import { IncidentService } from '../../services/IncidentService'
import IncidentList from '../../components/IncidentList/IncidentList'
import IncidentForm from '../../components/IncidentForm/IncidentForm'
import './app.css'

type SysIdType = string | null | { value?: string; [key: string]: any}
interface IncidentObject {
    sys_id: SysIdType
}

export default function App() {
    const [incidents, setIncidents] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [selectedIncident, setSelectedIncident] = useState<IncidentObject | null>(null)
    const [error, setError] = useState<string | null>(null)

    const incidentService = useMemo(() => new IncidentService(), [])

    const refreshIncidents = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await incidentService.list()
            setIncidents(data)
        } catch (err) {
            setError('Failed to load incidents: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        void refreshIncidents()
    }, [])

    const handleCreateClick = () => {
        setSelectedIncident(null)
        setShowForm(true)
    }

    const handleEditClick = (incident) => {
        setSelectedIncident(incident)
        setShowForm(true)
    }

    const handleFormClose = () => {
        setShowForm(false)
        setSelectedIncident(null)
    }

    const handleFormSubmit = async (formData) => {
        setLoading(true)
        try {
            if (selectedIncident) {
                if (selectedIncident.sys_id === null) throw new Error('sys_id is null')
                const sysId =
                    typeof selectedIncident.sys_id === 'object' && typeof selectedIncident.sys_id.value === 'string'
                        ? selectedIncident.sys_id.value
                        : selectedIncident.sys_id
                await incidentService.update(sysId, formData)
            } else {
                await incidentService.create(formData)
            }
            setShowForm(false)
            await refreshIncidents()
        } catch (err) {
            setError('Failed to save incident: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="incident-app">
            <header className="app-header">
                <h1>Incident Response Manager</h1>
                <button className="create-button" onClick={handleCreateClick}>
                    Create New Incident
                </button>
            </header>

            {error && (
                <div className="error-message">
                    {error}
                    <button onClick={() => setError(null)}>Dismiss</button>
                </div>
            )}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <IncidentList
                    incidents={incidents}
                    onEdit={handleEditClick}
                    onRefresh={refreshIncidents}
                    service={incidentService}
                />
            )}

            {showForm && (
                <IncidentForm incident={selectedIncident} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
            )}
        </div>
    )
}
