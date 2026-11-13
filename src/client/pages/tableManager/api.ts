declare const window: Window & { g_ck: string }

const headers = () => ({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-UserToken': window.g_ck,
})

export async function fetchCount(table: string): Promise<number> {
    const res = await fetch(`/api/now/stats/${table}?sysparm_count=true`, { headers: headers() })
    const json = await res.json()
    return parseInt(json.result.stats.count, 10)
}

export async function deleteAllRecords(table: string): Promise<number> {
    const res = await fetch(
        `/api/now/table/${table}?sysparm_fields=sys_id&sysparm_limit=10000`,
        { headers: headers() }
    )
    const json = await res.json()
    const records: Array<{ sys_id: string }> = json.result || []
    for (const rec of records) {
        await fetch(`/api/now/table/${table}/${rec.sys_id}`, {
            method: 'DELETE',
            headers: headers(),
        })
    }
    return records.length
}
