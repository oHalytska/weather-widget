import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className="form-container">
      <input
        className="input-city"
        type="text"
        name="city"
        placeholder="Enter city..."
      ></input>
      <button className="btn-show" type="submit">
        show
      </button>
    </form>
  );
};

export default Form;
