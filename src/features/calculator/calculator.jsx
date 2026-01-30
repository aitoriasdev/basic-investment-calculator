import Input from "./input";

export default function Calculator({ inputInvestments, onInputChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputInvestments;

  function handleInputChange(inputName, newValue) {
    onInputChange(inputName, newValue);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          name="initialInvestment"
          value={initialInvestment}
          onValueChange={handleInputChange}
        />
        <Input
          label="Annual Investment"
          name="annualInvestment"
          value={annualInvestment}
          onValueChange={handleInputChange}
        />
        <Input
          label="Expected return"
          name="expectedReturn"
          step="0.1"
          value={expectedReturn}
          onValueChange={handleInputChange}
        />
        <Input
          label="Duration"
          name="duration"
          value={duration}
          onValueChange={handleInputChange}
        />
      </div>
    </section>
  );
}
