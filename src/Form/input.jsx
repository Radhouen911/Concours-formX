import React from "react";

const Input = ({ label, type = "text", id, name, icon }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-icon-wrapper">
        {icon}
        <input type={type} id={id} name={name || id} />
      </div>
    </div>
  );
};

export default Input;
