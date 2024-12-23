import btnClass from "./defaultBtnClass";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type LinkProps = {
  children?: React.ReactNode | React.ReactNode[];
  href: string;
  className?: string;
};

export default function Link(props: LinkProps) {
  const { children, href, className } = props;

  return (
    <a href={href} className={twMerge(btnClass, className)}>
      {children}
    </a>
  );
}
