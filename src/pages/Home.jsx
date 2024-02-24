import Discover from "../components/Discover";
import Favourites from "../components/Favourites";
import Navbar from "../components/Navbar";
import PopularCategories from "../components/PopularCategories";
import styles from "./Home.module.css";

function Home() {
  const Sort = [
    {
      url: "https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/65ac33e39149f3d14ec4154f_chalet.png",
      name: "Chalets",
    },
    {
      url: "https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/65ac33fcdb24d071131ff97f_hotel.png",
      name: "Hotels",
    },
    {
      url: "https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/65ac357998863816375543e2_fav%20(1).png",
      name: "Our favourites",
    },
    {
      url: "https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/65ac341c6d1cea5736e55299_de.png",
      name: "EN Stays",
    },
    {
      url: "https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/65ac34453f6ffd7ffaf59578_aut.png",
      name: "EN Stays",
    },
    {
      url: "https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/65ac340b2aee5f464db6b2a3_it.png",
      name: "IT Stays",
    },
  ];
  const card = [
    {
      pic: "/src/assets/beautiful.jpg",
      btn1: "chalet",
      h5: "Small place to stay",
      para: "Montabaur-Reckenthal —Germany",
      price: "away 180€",
      btn2: "View",
    },
    {
      pic: "/src/assets/ice.jpg",
      btn1: "hotel",
      h5: "Alpine Lodge",
      para: "Scheffau —Germany",
      price: "away 295€",
      btn2: "View",
    },
    {
      pic: "/src/assets/room.jpg",
      btn1: "hotel",
      h5: "Crane Hotel",
      para: "Hessenburg/Hall —Germany",
      price: "away 189€",
      btn2: "View",
    },
    {
      pic: "/src/assets/outside.jpg",
      btn1: "hhh",
      h5: "Loblocher Hof",
      para: "Neustadt/Weinstrasse —Germany",
      price: "away 145€",
      btn2: "View",
    },
  ];

  const categories = [
    {
      image: "/src/assets/stays-two.jpg",
      title: "Stays for two",
      exp: "Accommodation",
      arrow: "/src/assets/arrow-right.png",
    },
    {
      image: "/src/assets/adults-only.jpg",
      title: "Adults only",
      exp: "Accommodation",
      arrow: "/src/assets/arrow-right.png",
    },
    {
      image: "/src/assets/kids.jpg",
      title: "Adults only",
      exp: "Accommodation",
      arrow: "/src/assets/arrow-right.png",
    },
    {
      image: "/src/assets/cycle.jpg",
      title: "Adults only",
      exp: "Accommodation",
      arrow: "/src/assets/arrow-right.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        {/* Container start */}
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.p}>In & near home:</p>
            <h1 className={styles.h1}>
              Experience the most wonderful accommodations
            </h1>
            <button className={styles.button}>Discover now</button>
          </div>

          <div className={styles.right}>
            <button className={styles.btn1}>Hygna Chalet</button>
            <button className={styles.btn1}>Austria</button>
          </div>
        </div>
        {/* CONTAINER END */}

        {/* SOTING SECTION START */}
        <div className={styles.Sort}>
          <p>Sort by:</p>
          <div className={styles.category}>
            {Sort.map((item) => (
              <div key={item} className={styles.atom}>
                <img className={styles.catimg} src={item.url} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* SOTING SECTION END */}

        <PopularCategories categories={categories} />
        <Favourites cards={card} />
        <Discover />
      </div>
    </>
  );
}

export default Home;
