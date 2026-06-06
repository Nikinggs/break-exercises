const employees = [];

for (let i = 1; i <= 30; i++) {

  employees.push({
    id: i,
    name: `Employee ${i}`,
    department: [
      "Engineering",
      "HR",
      "Finance",
      "Marketing"
    ][i % 4],
    salary: 50000 + (i * 1000)
  });

}

let currentPage = 1;

const rowsPerPage = 10;

let searchTerm = "";

let sortColumn = "";

let sortDirection = "asc";

const tableBody =
document.getElementById("tableBody");

const searchInput =
document.getElementById("searchInput");

const pagination =
document.getElementById("pagination");

function getFilteredData() {

  return employees.filter(employee => {

    return Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      );

  });

}

function sortData(data) {

  if (!sortColumn) return data;

  return [...data].sort((a, b) => {

    if (a[sortColumn] < b[sortColumn]) {
      return sortDirection === "asc"
        ? -1
        : 1;
    }

    if (a[sortColumn] > b[sortColumn]) {
      return sortDirection === "asc"
        ? 1
        : -1;
    }

    return 0;

  });

}

function paginate(data) {

  const start =
    (currentPage - 1) * rowsPerPage;

  const end =
    start + rowsPerPage;

  return data.slice(start, end);

}

function renderTable() {

  let data =
    getFilteredData();

  data =
    sortData(data);

  const pageData =
    paginate(data);

  tableBody.innerHTML = "";

  pageData.forEach(employee => {

    const row =
    document.createElement("tr");

    row.className =
    "border-b";

    row.innerHTML = `
      <td class="p-3">
        ${employee.id}
      </td>

      <td class="p-3">
        <input
          value="${employee.name}"
          data-id="${employee.id}"
          data-field="name"
          class="border p-1 w-full"
        >
      </td>

      <td class="p-3">
        <input
          value="${employee.department}"
          data-id="${employee.id}"
          data-field="department"
          class="border p-1 w-full"
        >
      </td>

      <td class="p-3">
        <input
          value="${employee.salary}"
          data-id="${employee.id}"
          data-field="salary"
          class="border p-1 w-full"
        >
      </td>

      <td class="p-3">
        Editing Live
      </td>
    `;

    tableBody.appendChild(row);

  });

  renderPagination(data.length);

}

function renderPagination(totalRows) {

  pagination.innerHTML = "";

  const totalPages =
  Math.ceil(
    totalRows / rowsPerPage
  );

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    const btn =
    document.createElement("button");

    btn.textContent = i;

    btn.className =
      `px-3 py-1 rounded border
      ${i === currentPage
      ? "bg-blue-500 text-white"
      : ""}`;

    btn.addEventListener(
      "click",
      () => {

        currentPage = i;

        renderTable();

      }
    );

    pagination.appendChild(btn);

  }

}

searchInput.addEventListener(
  "input",
  (e) => {

    searchTerm = e.target.value;

    currentPage = 1;

    renderTable();

  }
);

document
.querySelectorAll("th[data-column]")
.forEach(header => {

  header.addEventListener(
    "click",
    () => {

      const column =
      header.dataset.column;

      if (
        sortColumn === column
      ) {

        sortDirection =
        sortDirection === "asc"
          ? "desc"
          : "asc";

      } else {

        sortColumn = column;

        sortDirection = "asc";

      }

      renderTable();

    }
  );

});

tableBody.addEventListener(
  "input",
  (e) => {

    const id =
    Number(
      e.target.dataset.id
    );

    const field =
    e.target.dataset.field;

    const employee =
    employees.find(
      emp => emp.id === id
    );

    employee[field] =
    field === "salary"
      ? Number(e.target.value)
      : e.target.value;

  }
);

renderTable();