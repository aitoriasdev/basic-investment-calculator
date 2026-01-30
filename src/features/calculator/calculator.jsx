import Input from "./input";

export default function Calculator({ inputInvestments }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputInvestments;
    
  return (
    <section id="user-input">
      <div className="input-group">
        <Input label="Initial Investment" value={initialInvestment} />
        <Input label="Annual Investment" value={annualInvestment} />
        <Input label="Expected return" value={expectedReturn} />
        <Input label="Duration" value={duration} />
      </div>
    </section>
  );
}
