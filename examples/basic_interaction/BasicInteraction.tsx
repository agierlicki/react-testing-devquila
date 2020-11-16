import * as React from "react";

interface Props {
  onClick(): void;
}

export default function BasicInteraction(props: Props): JSX.Element {
  return <button onClick={props.onClick}>Click me!</button>;
}
