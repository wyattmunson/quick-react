import React from "react";

export const FormField = props => {
  return (
    <div class="form-group">
      <label for={props.id}>{props.label}</label>
      <input
        type="text"
        class="form-control"
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.getInput}
        name={props.name}
      />
    </div>
  );
};

export const DatePicker = props => {
  return (
    <div class="form-group">
      <label for={props.id}>{props.label}</label>
      <input type="date" class="form-control" id={props.id} onChange={props.getInput} name={props.name} />
    </div>
  );
};

export const SubmitButton = props => {
  return (
    <button type="submit" class="btn btn-primary" onClick={props.getInput}>
      {props.text || "Submit"}
    </button>
  );
};

export const EasyButton = props => {
  return (
    <button type={props.type || "button"} className={props.className || "btn btn-primary"} onClick={props.getInput}>
      {props.text}
    </button>
  );
};
