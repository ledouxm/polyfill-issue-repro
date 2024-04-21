import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

import { sql } from "@databases/pg";
import { escapePostgresIdentifier } from "@databases/escape-identifier";

let result = "Error";

try {
  result = sql`SELECT 1 + 1 as result`.format({
    escapeIdentifier: escapePostgresIdentifier,
    formatValue: (value, index) => ({ placeholder: `$${index + 1}`, value }),
  }).text;
} catch (e) {
  console.error(e);
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${result}
  </div>
`;
