import React from 'react';
import styles from "./Footer.module.css"
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  IoLogoYoutube,
} from "react-icons/fa6";

function Footer() {

    const NavItems = [
      {
        name: "Accommodation",
        link: "../pages/Accommodation.jsx",
      },
      {
        name: "Categories",
        link: "../pages/Categories.jsx",
      },
      {
        name: "About Us",
        link: "../pages/Aboutus.jsx",
      },
      {
        name: "Inspiration",
        link: "../pages/Inspiration.jsx",
      },
      {
        name: "Enter accomodation",
        link: "../pages/Inspiration.jsx",
      },
    ];
  return (
    <div className={styles.main}>
      <div className={styles.first}>
       

        <div className={styles.items}>
          {NavItems.map((items) => (
            <a className={styles.a} key={items} href={items.link}>
              {items.name}
            </a>
          ))}
        </div>
        <div className={styles.social}>
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
          <IoLogoYoutube />
        </div>
      </div>
    </div>
  );
}

export default Footer