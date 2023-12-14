import * as React from "react";
import {MouseEventHandler} from "react";

interface IButtonProps {
  clickHandler?: ()=>void
}
export const Button: ({clickHandler}: IButtonProps) => React.JSX.Element = ({clickHandler = ()=>{}}: IButtonProps) => {
  return <button onClick={()=>clickHandler()}>Click me</button>;
};
