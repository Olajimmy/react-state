import { useState, useEffect } from "react";
import Clock from "./Clock";

function TimeColor() {
  function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }

  const time = useTime();
  const [color, setColor] = useState("lightblue");

  return (
    <div>
      <h2>Time and Color Example - Dynamic and Chaning Props</h2>
      <p>
        Pick a color:{" "}
        <select value={color} onChange={(evt) => setColor(evt.target.value)}>
          <option value="lightcoral">lightcoral</option>
          <option value="lightblue">lightblue</option>
          <option value="lightseagreen">lightseagreen</option>
          <option value="lightgray">lightgray</option>
          <option value="linen">linen</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  );
}

export default TimeColor;

// import { useState, useEffect} from "react"
// import Clock from "./Clock"

// function TimeColor(){
//     function useTime(){
//         const [time, setTime]=useState{()=> new Date()}
//         useEffect{()=>{
//             const id = setInterval{()=>{
//                 setTime(new Date())
//             }, 1000}
//             return()=> clearInterval(id)
//         }, []
//     }
//     return time
//     }
//     const time = useTime();
//     const [color, setColor] = useState("lightblue")
//     return(
//         <div>
//             <h2>Time and Color example - Dynamic and Changing Props</h2>
//         <p>Pick a Color:
//         <select value = {color} onChange={evt=> setColor(evt.target.value)}>
//         <option value ="lightcoral">Light Coral</option>
//         <option value ="lightcoral">Light Coral</option>
//         <option value ="lightcoral">Light Coral</option>
//         <option value ="lightcoral">Light Coral</option>
//         <option value ="lightcoral">Light Coral</option>

//         </select>
//         </p>
//         <Clock color ={color} time={time.toLocaleDateString()}/>
//         </div>
//     )
// }
// export default TimeColor
