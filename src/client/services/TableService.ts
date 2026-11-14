// Extend Window interface to include g_ck property
declare global {
  interface Window {
    g_ck: string;
  }
}

export class TableService {
  private readonly table: string;
  private readonly headers: any;

  constructor(table: string) {
    this.table = table;
    this.headers = {
      Accept: 'application/json',
      'X-UserToken': window.g_ck,
    };
  }

  async get(sysId: string, options: any = {}) {
    const defaultOptions = {
      sysparm_exclude_reference_link: 'true',
    };
    const searchParamString = getSearchParamString(options, defaultOptions);
    try {
      const response = await fetch(
        `/api/now/table/${this.table}/${sysId}${searchParamString}`,
        {
          method: 'GET',
          headers: this.headers,
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error?.message || `HTTP error ${response.status}`,
        );
      }

      const { result } = await response.json();
      return result;
    } catch (error) {
      console.error(`Error fetching incident ${sysId}:`, error);
      throw error;
    }
  }

  async list(options: any = {}) {
    const defaultOptions = {
      sysparm_fields: 'sys_id,sys_created_on',
    };
    const searchParamString = getSearchParamString(options, defaultOptions);
    try {
      const response = await fetch(
        `/api/now/table/${this.table}${searchParamString}`,
        {
          method: 'GET',
          headers: this.headers,
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
      console.error('Error fetching incidents:', error);
      throw error;
    }
  }

  async count(){
    const res = await fetch(`/api/now/stats/${this.table}?sysparm_count=true`, { headers: this.headers })
    const json = await res.json()
    return parseInt(json.result.stats.count, 10)
  }

  async delete(){
    // NOT TESTED YET
    const records: Array<{ sys_id: string }> = await this.list({ sysparm_fields: 'sys_id'})
    for (const rec of records) {
        await fetch(`/api/now/table/${this.table}/${rec.sys_id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
    }
    return records.length

  }
}


function getSearchParamString(options: any = {}, defaultOptions = {}) {
  const searchParams = new URLSearchParams();

  options = {
    ...defaultOptions,
    ...options,
  };
  const keys = Object.keys(options);
  if (keys.length === 0) return '';

  keys.forEach((key) => {
    console.log(key);
    searchParams.set(key, options[key]);
  });

  return `?${searchParams.toString()}`;
}
