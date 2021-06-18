import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(","); // converts into string to use in inline css
  const clickHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hexColor}`)
  };
  useEffect(() => {
    const timeOut=setTimeout(()=>{
      setAlert(false);
    },1000)
    return () => clearTimeout(timeOut);
  }, [alert])
  return (
    <article
      onClick={clickHandler}
      className={`color ${index > 15 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
