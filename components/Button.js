import React from "react";

export const Button = ({ btn_text, callback }) => {
  return (
    <button
      className="text-white bg-new-game-light-blue w-full max-w-[18rem]  rounded-lg py-3 font-semibold"
      onClick={callback}
    >
      {btn_text}
    </button>
  );
};
