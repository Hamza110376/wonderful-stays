import styles from "./Favourites.module.css";

function Favourites({cards}) {
  

  return (
    <div className={styles.main}>
      <p>Accommodations</p>
      <h1>Our favorites</h1>
      <div className={styles.wrapper}>
        {cards.map((items) => (
          <div key={items} className={styles.card}>
            <div className={styles.imageText}>
              <img src={items.pic} />
              <button>{items.btn1}</button>
            </div>
            <h5>{items.h5}</h5>
            <p>{items.para}</p>
            <div className={styles.end}>
              <p>{items.price}</p>
              <button>{items.btn2}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites;
