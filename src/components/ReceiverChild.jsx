function ReceiverChild(props) {
  //im going to be looking for props.update
  //which is the function that updates the state
  return <h1 style={{ backgroundColor: "green" }}>{props.value}</h1>;
}
export default ReceiverChild;
