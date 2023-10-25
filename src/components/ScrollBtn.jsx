import { styles } from "../styles";

export const ScrollBtn = ({ navigate }) => {
  return (
    <button className={styles.btn} onClick={() => navigate()}>
      NOW
    </button>
  );
};
