import React from "react";

const Input = ({ label, type = "text", id, name, value, onChange, error }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
