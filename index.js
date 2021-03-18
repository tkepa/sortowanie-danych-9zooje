import { TableUI } from "./assets/tableUI.js";

const tableData = {
  columns: ["Moduł", "Autor", "Czas trwania"],
  rows: {
    0: ["Fundamenty języka JavaScript", "Adam", "10129"],
    1: ["Przeglądarka bez tajemnic", "Przemek", "19393"],
    2: ["W świecie frameworków", "Marcin", "14002"]
  }
};

const container = document.querySelector("body");

const table = new TableUI(container);

container.appendChild(table.createTable(tableData));
