export function unloadRecord(table: string, json: any): string {
  const xmlString = singleJsonToXmlString(table, json);

  return wrap(xmlString)
}

export function unloadRecords(table: string, jsonList: any[]){
  const xmlString = multiJsonToXmlString(table, jsonList);

  return wrap(xmlString)
}

export function unloadMultipleTables(definitions: any[]){
  const xmlString = definitions.map(({ table, recordList }) => {
    return multiJsonToXmlString(table, recordList);
  }).join('');

  return wrap(xmlString);
}

function wrap(xmlString: string){
  return `<?xml version="1.0" encoding="UTF-8"?><unload>${xmlString}</unload>`
}


function singleJsonToXmlString(table: string, json: any){
  // client side xml creator for unloads - this is not the unload itself but
  // the xml representation of a single record
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
  const xmlString = serializer.serializeToString(tableElement);
  
  return xmlString;
}

function multiJsonToXmlString(table: string, jsonList: any[]){
  const xmlStringList = jsonList.map(json => singleJsonToXmlString(table, json));

  return xmlStringList.join('');
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