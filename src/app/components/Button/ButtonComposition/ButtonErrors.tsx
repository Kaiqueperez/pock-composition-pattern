"use client";

interface IButtonErrorsProps {
  errors: string;
}
export const ButtonErrors = ({ errors }: IButtonErrorsProps) => {
  return <span>{errors}</span>;
};
