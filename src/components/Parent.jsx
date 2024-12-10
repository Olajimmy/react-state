import { useState } from "react";
import ReceiverChild from "./ReceiverChild";
import SenderChild from "./SenderChild";

function Parent() {
  const [state, setState] = useState("hello");
  const updateState = (data) => setState(data);
  return (
    <div>
      <h2>This is an example of lifting state</h2>
      <ReceiverChild value={state} />
      <SenderChild update={updateState} />
    </div>
  );
}
export default Parent;
