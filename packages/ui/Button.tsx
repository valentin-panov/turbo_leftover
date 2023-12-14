import * as React from "react";
export const Button = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>Click me</button>;
};
