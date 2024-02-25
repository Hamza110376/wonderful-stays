import styles from "./Testmonial.module.css"
import { IoIosStar } from "react-icons/io";
function Testmonial() {
  return (
    <div className={styles.main}>
      <div className={styles.imagediv}>
        <img src="/src/assets/girl.jpg" />
      </div>

      <div className={styles.right}>
        <div className={styles.icons}>
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p>
          "Our stay in the chalet was magical. From the moment we opened the
          door and saw the breathtaking view, we knew we had found a little
          piece of paradise. The loving details in the chalet and the peace and
          quiet will never be forgotten ."
          <div className={styles.inner}>
            <h5>Melanie Lessinger</h5>
            <p>Wonderful Stays customer</p>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Testmonial