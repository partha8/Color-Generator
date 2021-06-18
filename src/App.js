import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    let colors = new Values("red").all(5);
    setList(colors);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const randomHandler = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = `#${randomColor}`;
    setColor(randomColor);
  };
  return (
    <>
      {" "}
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn">Submit</button>
          <button
            style={{ marginLeft: "0.5rem" }}
            className="btn"
            onClick={randomHandler}
          >
            Randomize
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              hexColor={color.hex}
              {...color}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
