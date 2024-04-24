import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ title }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.number}>10.290</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous
        </span>
      </div>
    </div>
  );
};

export default Card;
