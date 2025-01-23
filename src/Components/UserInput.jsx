

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => onChange('initialInvestment', parseFloat(event.target.value))}
//event.target.value always give the answer as a string even if you will specify the type to be number- that can led to bug as it will just concatenate the two numbers as a string
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChange('annualInvestment', parseFloat(event.target.value))}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange('expectedReturn', parseFloat(event.target.value))}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange('duration', parseFloat(event.target.value))}
          />
        </p>
      </div>
    </section>
  );
}
