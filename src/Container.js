import { useState, useEffect } from "react";

const Container = () => {
  const [temp, setTemp] = useState(10);

  const handleButton = (e) => {
    const value = e.target.value;
    if (value === "add") {
      setTemp((prev) => (prev += 1));
    } else {
      setTemp((prev) => (prev -= 1));
    }
  };

  const styles = { backgroundColor: temp > 15 ? "#F76201" : "#1b66ae" };

  return (
    <div className="container">
      <div className="temperature" style={styles}>
        {temp}˚C
      </div>
      <div className="controller">
        <button onClick={handleButton} value="add" className="add">
          +
        </button>
        <button onClick={handleButton} value="subtract" className="subtract">
          -
        </button>
      </div>
    </div>
  );
};

export default Container;
