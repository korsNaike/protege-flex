const endpoint = "http://localhost:3030/lab/sparql"; // Адрес вашего SPARQL-эндпоинта

const queries = {
  maxMinProjects: `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX ont: <file:/home/korsnaike/studying/protege/building-2.rdf#>

SELECT ?проект (MIN(?стоимость) AS ?минимальнаяЗатрата) (MAX(?стоимость) AS ?максимальнаяЗатрата)
WHERE {
  ?проект rdf:type ont:Проект .
  ?работа ont:входитВПроект ?проект .
  ?затрата ont:связаныСРаботой ?работа .
  ?затрата ont:суммаЗатраты ?стоимость .
}
GROUP BY ?проект
  `,
  equipmentInProjects: `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX ont: <file:/home/korsnaike/studying/protege/building-2.rdf#>

CONSTRUCT {
    ?оборудование ont:применяетсяВРаботе ?работа .
    ?работа ont:входитВПроект ?проект
}
WHERE {
    ?оборудование ont:применяетсяВРаботе ?работа .
    ?работа ont:входитВПроект ?проект
}
  `,
  sumForProject: `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX ont: <file:/home/korsnaike/studying/protege/building-2.rdf#>

SELECT ?проект (SUM(?стоимость) AS ?суммарныеЗатраты)
WHERE {
  ?работа ont:входитВПроект ?проект .
  ?затрата ont:связаныСРаботой ?работа .
  ?затрата ont:суммаЗатраты ?стоимость .
}
GROUP BY ?проект
  `,
  employeeInProjects: `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX ont: <file:/home/korsnaike/studying/protege/building-2.rdf#>
SELECT ?сотрудник ?проект
WHERE {
  ?проект ont:имеетИнженера ?сотрудник .
}
  `,
  projectsDates: `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX ont: <file:/home/korsnaike/studying/protege/building-2.rdf#>
SELECT ?проект ?датаНачала ?работа ?затрата
WHERE {
  ?проект ont:датаНачалаПроекта ?датаНачала .
  ?работа ont:входитВПроект ?проект .
  ?затрата ont:связаныСРаботой ?работа .
}
  `,
};

async function runQuery(queryKey) {
  const query = queries[queryKey];
  if (query.includes("CONSTRUCT")) {
    await executeXMLQuery(query)
  } else {
    await executeQuery(query, queryKey);
  }
}

async function runCustomQuery() {
  const query = document.getElementById("customQueryInput").value;
  if (!query.trim()) {
    alert("Please enter a valid SPARQL query.");
    return;
  }
  await executeQuery(query);
}

async function executeQuery(query) {
  const loadingElement = document.getElementById("loading");
  const resultsElement = document.getElementById("results");

  loadingElement.style.display = "block"; // Показываем индикатор загрузки
  resultsElement.innerHTML = ""; // Очищаем предыдущие результаты

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/sparql-query",
      },
      body: query,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    displayResults(data.results.bindings);
  } catch (error) {
    resultsElement.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  } finally {
    loadingElement.style.display = "none"; // Скрываем индикатор загрузки
  }
}

function displayResults(bindings) {
  const resultsElement = document.getElementById("results");

  if (bindings.length === 0) {
    resultsElement.innerHTML = "<p>No results found.</p>";
    return;
  }

  const headers = Object.keys(bindings[0]);
  let tableHTML = "<table><thead><tr>";

  headers.forEach((header) => {
    tableHTML += `<th>${header}</th>`;
  });

  tableHTML += "</tr></thead><tbody>";

  bindings.forEach((binding) => {
    tableHTML += "<tr>";
    headers.forEach((header) => {
      tableHTML += `<td>${binding[header]?.value || "N/A"}</td>`;
    });
    tableHTML += "</tr>";
  });

  tableHTML += "</tbody></table>";
  tableHTML = tableHTML.replaceAll("file:/home/korsnaike/studying/protege/building-2.rdf#", "")

  resultsElement.innerHTML = tableHTML;
}

async function executeXMLQuery(query) {
  const loadingElement = document.getElementById("loading");
  const resultsElement = document.getElementById("results");

  loadingElement.style.display = "block"; // Показываем индикатор загрузки
  resultsElement.innerHTML = ""; // Очищаем предыдущие результаты

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/sparql-query",
        "Accept": "application/rdf+xml",
      },
      body: query,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(responseText, "application/xml");

    const triples = parseRDFXML(xmlDoc);
    displayXMLResults(triples);
  } catch (error) {
    resultsElement.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  } finally {
    loadingElement.style.display = "none"; // Скрываем индикатор загрузки
  }
}

function parseRDFXML(xmlDoc) {
  const triples = [];
  const descriptions = xmlDoc.getElementsByTagName("rdf:Description");

  for (let desc of descriptions) {
    const subject = desc.getAttribute("rdf:about");
    const predicates = desc.children;

    for (let predicate of predicates) {
      const predicateName = predicate.tagName.split(":").pop();
      const object = predicate.getAttribute("rdf:resource") || predicate.textContent.trim();

      triples.push({ subject, predicate: predicateName, object });
    }
  }

  return triples;
}

function displayXMLResults(triples) {
  const resultsElement = document.getElementById("results");

  if (triples.length === 0) {
    resultsElement.innerHTML = "<p>No results found.</p>";
    return;
  }

  let tableHTML = "<table><thead><tr><th>Subject</th><th>Predicate</th><th>Object</th></tr></thead><tbody>";

  triples.forEach((triple) => {
    tableHTML += `<tr><td>${triple.subject}</td><td>${triple.predicate}</td><td>${triple.object}</td></tr>`;
  });

  tableHTML += "</tbody></table>";
  tableHTML = tableHTML.replaceAll("file:/home/korsnaike/studying/protege/building-2.rdf#", "")

  resultsElement.innerHTML = tableHTML;
}
