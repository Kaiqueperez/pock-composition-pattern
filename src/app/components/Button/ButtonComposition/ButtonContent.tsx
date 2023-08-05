"use client";

import { MouseEventHandler } from "react";

interface IButtonContentProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  changeBgColor?: boolean;
}
export const ButtonContent = ({
  onClick,
  children,
  changeBgColor,
}: IButtonContentProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`font-bold ${
          changeBgColor ? "bg-tahiti" : "bg-black"
        } text-white w-64 `}
      >
        {" "}
        {children}
      </button>
    </>
  );
};
