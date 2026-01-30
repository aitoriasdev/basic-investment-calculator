export default function Input({
  label,
  name,
  step = 1,
  value = 0,
  onValueChange,
}) {
  function handleChange(inputName, newValue) {
    onValueChange(inputName, Number(newValue));
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
        onChange={(event) => handleChange(name, event.target.value)}
        required
      />
    </div>
  );
}
