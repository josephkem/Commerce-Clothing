import React from "react";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} form`}
        ></label>
      ) : null}
      {label}
    </div>
  );
}

export default FormInput;
