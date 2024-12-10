function Clock(props) {
  return (
    <div>
      <h3> this is the clock component</h3>
      <h1 style={{ color: props.color }}>{props.time}</h1>
    </div>
  );
}

export default Clock;
