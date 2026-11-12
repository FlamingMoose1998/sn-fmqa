export function jsonToUnloadXml(table: string, json: any): string {
    // client side xml creator for unloads
    const xmlDoc = document.implementation.createDocument('', 'unload', null);
    const tableElement = xmlDoc.createElement(table);
    tableElement.setAttribute('action', 'INSERT_OR_UPDATE')
    xmlDoc.documentElement.appendChild(tableElement); 
    
  
    for (const field in json){
      const element = xmlDoc.createElement(field);
      element.textContent = json[field]
      tableElement.appendChild(element)
    }
  
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(xmlDoc);
  
    return `<?xml version="1.0" encoding="UTF-8"?>${xmlString}`
  }
  
  export function downloadXml(filename: string, xmlContent: string){
      const blob = new Blob([xmlContent], { type: 'application/xml' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
  }