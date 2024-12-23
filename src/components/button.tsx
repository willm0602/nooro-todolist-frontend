import btnClass from "./defaultBtnClass";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children?: React.ReactNode | React.ReactNode[];
  onClick?: MouseEventHandler;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const { children, className, onClick } = props;

  return (
    <button onClick={onClick} className={twMerge(btnClass, className)}>
      {children}
    </button>
  );
}
