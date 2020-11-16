import * as React from "react";

interface Props {
  onAccept(): void;
  onCancel(): void;
}

export default function MultipleElements(props: Props): JSX.Element {
  return (
    <div>
      <div>Ok</div>
      <button onClick={props.onAccept}>Ok</button>
      <button onClick={props.onCancel}>Cancel</button>
    </div>
  );
}
