import React from "react";

const Button = ({text, onClick}) => {
  return (
    <>
      <button
        className=" mt-5 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
