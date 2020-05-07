import React from 'react';

const Form = () => {
  return (
    <form>
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