const Input = ({ label, type = "text", id, name }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name || id} />
    </div>
  );
};
export default Input;
