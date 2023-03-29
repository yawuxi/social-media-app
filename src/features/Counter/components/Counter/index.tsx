import { useState } from "react";
import styles from "./styles.module.scss";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue((prevState) => prevState + 1);
  };

  const handleDecrease = () => {
    setValue((prevState) => prevState - 1);
  };

  return (
    <div className={styles.counter}>
      <div className={styles.content}>
        Hello! I am counter <br />
        <p>My value is: {value}</p>
        <button onClick={handleIncrease}>Increase me! :)</button>
        <button onClick={handleDecrease}>Decrease me! :(</button>
      </div>
    </div>
  );
};
