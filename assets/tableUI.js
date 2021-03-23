export class TableUI {
  constructor(container) {
    this.container = container;
    this.tbody = null;
    this.tableClass =
      "table-auto bg-white rounded-md overflow-hidden shadow-xl";
    this.cellClass = "border px-4 py-2";
    this.headerClass = "px-4 py-2";
    this.rowClass = "bg-gray-100";
  }

  createTable({ headers, rows }) {
    const table = document.createElement("table");

    table.setAttribute("class", this.tableClass);

    table.appendChild(this.createTableHeader(headers));
    table.appendChild(this.createTableBody(rows));

    return table;
  }

  createTableHeader(columns) {
    const tableHeader = document.createElement("thead");

    columns.forEach(({ name, onClick }) =>
      tableHeader.appendChild(this.createColumnHeader(name, onClick))
    );

    return tableHeader;
  }

  createTableBody(rowsData) {
    const tableBody = document.createElement("tbody");

    Object.values(rowsData).forEach((rowData, index) =>
      tableBody.appendChild(this.createRow(rowData, index))
    );
    this.tbody = tableBody;
    return tableBody;
  }

  createColumnHeader(header, onClick) {
    const columnHeader = document.createElement("th");

    columnHeader.setAttribute("class", this.headerClass);
    columnHeader.innerHTML = header;
    if (onClick) this.addEventListener(columnHeader, onClick);
    return columnHeader;
  }

  createRow(rowData, index) {
    const row = document.createElement("tr");

    if (index % 2 != 0) row.setAttribute("class", this.rowClass);

    rowData.forEach(data => row.appendChild(this.createDataCell(data)));

    return row;
  }

  createDataCell(text) {
    const dataCell = document.createElement("td");

    dataCell.setAttribute("class", this.cellClass);
    dataCell.textContent = text;

    return dataCell;
  }

  sortByColumn(index) {
    const rows = [...this.tbody.rows];
    const orderedRows = rows.sort(
      (row1, row2) =>
        +[...row2.cells][index]?.textContent -
        +[...row1.cells][index]?.textContent
    );

    this.generateOrderedTbody(orderedRows);
  }

  generateOrderedTbody(...rows) {
    this.tbody.innerHTML = "";
    rows.forEach(row => (this.tbody.innerHTML += row));
  }
}
