import React from "react";

const Form = ({onSubmit, onChange , task}) => {
  return (
    <form onSubmit={onSubmit} className="form-group">
      <input
        onChange={onChange}
        type="text"
        className="col-12 form-control eczar"
        placeholder="¿Qué hay para hoy?"
        value={task.value}
        required
      />
    </form>
  );
};

export default Form
