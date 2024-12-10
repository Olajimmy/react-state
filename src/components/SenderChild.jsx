//function SenderChild(props) {
function SenderChild({ update }) {
  //im going to be looking for props.update
  //which is the function that updates the state
  return (
    <button onClick={() => update("Goodbye")}>Click Me</button>
    //<div>SenderChild</div>
  );
}
export default SenderChild;
