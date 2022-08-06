import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // const [text,setText] = useState('')

  const tick = () => {
    console.log("clock ticking");
    setDate(new Date());
  };

  useEffect(() => {
    console.log("document title re-render");
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("clock started");
    const interval = setInterval(tick, 1000);

    //Do the cleanup -stoping timer
    return ()=>{
     console.log('Component Unmount');
     clearInterval(interval);
    }

  }, []);

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>useEffect Exercise</h2>
      {/* <input type="text" value={text} onChange={(e)=> setText(e.target.value)} /> */}
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button type="button" onClick={addClick}>
          Click
        </button>
      </p>
    </div>
  );
}
