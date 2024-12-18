const endpoint = "http://localhost:3030/lab/sparql"; // Адрес вашего SPARQL-эндпоинта

const queries = {
  projectsInProgress: `
    PREFIX : <http://example.org/>
    SELECT ?projectName ?status
    WHERE {
      ?project a :Project ;
               :hasName ?projectName ;
               :hasStatus "In Progress" .
    }
  `,
  specialistsAndRoles: `
    PREFIX : <http://example.org/>
    SELECT ?specialistName ?role
    WHERE {
      ?specialist a :Specialist ;
                  :hasSpecialistName ?specialistName ;
                  :hasRole ?role .
    }
  `,
  devicesAssignedToProjects: `
    PREFIX : <http://example.org/>
    SELECT ?deviceName ?deviceType ?projectName
    WHERE {
      ?device a :Device ;
              :hasDeviceName ?deviceName ;
              :hasDeviceType ?deviceType ;
              :assignedToProject ?project .
      ?project :hasName ?projectName .
    }
  `,
  pendingRequirements: `
    PREFIX : <http://example.org/>
    SELECT ?requirementDescription ?status
    WHERE {
      ?requirement a :Requirement ;
                   :hasRequirementDescription ?requirementDescription ;
                   :hasRequirementStatus "Pending" .
    }
  `,
  technologies: `
    PREFIX : <http://example.org/>
    SELECT ?technologyName ?technologyID
    WHERE {
      ?technology a :Technology ;
                  :hasTechnologyName ?technologyName ;
                  :hasTechnologyID ?technologyID .
    }
  `,
};

async function runQuery(queryKey) {
  const query = queries[queryKey];
  await executeQuery(query);
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

  resultsElement.innerHTML = tableHTML;
}
