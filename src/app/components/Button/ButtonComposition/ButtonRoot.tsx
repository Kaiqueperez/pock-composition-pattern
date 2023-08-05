"use client";

interface IButtonRootProps {
  title?: string;
  children: React.ReactNode;
}
export const ButtonRoot = ({ title, children }: IButtonRootProps) => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-lg">{title}</h1>
      {children}
    </div>
  );
};
