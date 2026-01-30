import { formatter } from "../../util/investment.js";
import { resultHeaders } from "../../util/resultHeaders.js";

export default function Result({ results }) {
  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            {resultHeaders.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row) => (
            <tr>
              <td>{row.year}</td>
              <td>{formatter.format()}</td>
              <td>{formatter.format()}</td>
              <td>{formatter.format()}</td>
              <td>{formatter.format()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
