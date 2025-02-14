import React from "react";

export const TitleTho = ({ title }) => {
  return (
    <div className="grid justify-center mb-6">
      <h1 className="font-bold text-black text-2xl">
        {title}
        <hr className="" />
      </h1>
    </div>
  );
};
