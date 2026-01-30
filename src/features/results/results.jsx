import {
  calculateInvestmentResults,
  formatter,
} from "../../util/investment.js";
import { resultHeaders } from "../../util/resultHeaders.js";

export default function Results({ results }) {
  const resultsData = calculateInvestmentResults(results);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            {resultHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {resultsData.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;

            const totalInvested = row.valueEndOfYear - totalInterest;

            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
