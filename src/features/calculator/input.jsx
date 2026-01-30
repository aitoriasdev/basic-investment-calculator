export default function Input({ label, name, step, value, onValueChange }) {
  function handleChange(inputName, event) {
    const newValue = event.target.value;
    const newInvestment = { [inputName]: newValue };

    onValueChange(newInvestment);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        min="0"
        max="100000"
        step={step}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
}
