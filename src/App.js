import { useState } from "react";
import Calculator from "./features/calculator/calculator";
import Header from "./features/header/header";
import Result from "./features/result/result";
import { calculateInvestmentResults } from "./util/investment.js";

const INITIAL_INVESTMENTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInvestments, setUserInvestments] = useState(INITIAL_INVESTMENTS);

  const data = calculateInvestmentResults(userInvestments);

  return (
    <>
      <Header />
      <main>
        <Calculator inputInvestments={userInvestments} />
        <Result results={data} />
      </main>
    </>
  );
}

export default App;
