import "./App.css";
import Welcome from "./components/Welcome";
import Parent from "./components/Parent";
import TimeColor from "./components/TimeColor";
import Dogs from "./components/Dogs";

function App() {
  const color = "red";
  return (
    <>
      <h1>This is my React State notes</h1>
      <Welcome name="Sara" style={{ color: "red" }} />
      <Welcome name="Bob" style={{ color: "blue" }} />
      <Welcome name="Scott" style={{ color: "green" }} />
      <Welcome name="James" style={{ color }} />
      <Parent />
      <TimeColor />
      <Dogs />
    </>
  );
}

export default App;
