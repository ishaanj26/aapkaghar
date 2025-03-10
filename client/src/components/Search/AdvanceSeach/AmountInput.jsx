export const AmountInput = ({ width, placeholder, value, onChange }) => {
    return (
      <div>
        <input
          type="text"
          id="amount-input"
          style={{ width: width }}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  };
