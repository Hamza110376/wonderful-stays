import styles from './Blogs.module.css'
import { FaGreaterThan } from "react-icons/fa6";


function Blogs() {
  return (
    <div className={styles.main}>
      <p>Blog</p>
      <h1>Travel inspirations</h1>
      <div className={styles.inner}>
        <div className={styles.left}>
          <img src="/src/assets/iceland.jpg" />
          <h4>
            Winter enjoyment for everyone:
            <br /> mountain adventures without skis
          </h4>
          <p>
            This season you don't have to stay home just because you're not
            skiing. Choose your own place full of warmth and joy in the magical
            mountains. Immerse yourself in the winter fairy tale and be inspired
            by the variety of experiences this season has to offer.
          </p>

          <a>
            Learn more
          </a>
        </div>

        <div className={styles.right}></div>
      </div>
    </div>
  );
}

export default Blogs
