import { useState } from "react";
import styles from "./KgButton.module.css";

function Kgbutton() {
  const [rating, setRating] = useState(0); // initially all black

  return (
    <div className={styles.box}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={star <= rating ? styles.gold : styles.black}
          onClick={() => setRating(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default Kgbutton;
