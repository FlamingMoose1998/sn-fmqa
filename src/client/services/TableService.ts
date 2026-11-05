// Extend Window interface to include g_ck property
declare global {
    interface Window {
        g_ck: string;
    }
}

interface Options {
    fields?: string[];
    query?: string;
    includeDisplayValues?: boolean;
}



export class TableService {
    private readonly table: string;

    constructor(table: string) {
        this.table = table;
    }

    async get(options: Options = {}) {
        try {
            const searchParams = new URLSearchParams();

            if (options.fields) {
                searchParams.set('sysparm_fields', options.fields.join(','));
            }

            if (options.query) {
                searchParams.set('sysparm_query', options.query);
            }

            if (options.includeDisplayValues) {
                searchParams.set('sysparm_display_value', 'all');
            }

            const response = await fetch(
                `/api/now/table/${this.table}?${searchParams.toString()}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'X-UserToken': window.g_ck,
                    },
                },
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.error?.message || `HTTP error ${response.status}`,
                );
            }

            const { result } = await response.json();
            return result || [];
        } catch (error) {
            console.error('Error fetching records:', error);
            throw error;
        }
    }
}
