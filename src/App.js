import { useState } from "react";
import ErrorBoundary from "./util/ErrorBoundary";
import Calculator from "./features/calculator/calculator";
import Header from "./features/header/header";
import Results from "./features/results/results";

const INITIAL_INVESTMENTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInvestments, setUserInvestments] = useState(INITIAL_INVESTMENTS);

  const inputIsValid = userInvestments.duration >= 1;

  function handleCalculatorChange(inputName, newInputValue) {
    setUserInvestments((prevValues) => {
      const newInvestmentValues = {
        ...prevValues,
        [inputName]: +newInputValue,
      };

      return newInvestmentValues;
    });
  }

  return (
    <>
      <Header />
      <main>
        <Calculator
          inputInvestments={userInvestments}
          onInputChange={handleCalculatorChange}
        />
        {!inputIsValid && (
          <p className="center">Error. Duration must be greater than 0</p>
        )}
        {inputIsValid && <Results results={userInvestments} />}
      </main>
    </>
  );
}

export default App;
