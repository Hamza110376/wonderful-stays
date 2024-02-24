import styles from "./Discover.module.css"

function Discover() {
  return (
    <div className={styles.main}>
<div className={styles.left}>
<h1>Discover our ' Wonderful Stays ' in Europe</h1>
<p>Explore Europe with our 'Wonderful Stays' - your dream accommodation, from picturesque chalets to urban apartments.</p>
<button>Show on map</button>
</div>
<div className= {styles.right}>
<img src="/src/assets/map.jpg"/>
</div>
    </div>
  )
}

export default Discover