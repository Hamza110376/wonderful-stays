import React from 'react';
import styles from "./Footer.module.css"
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
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

    // const footerItem = [
    //   {
    //     title: "data protection",
    //     href: "#",
    //   },
    //   {
    //     title: "terms and conditions",
    //     href: "#",
    //   },
    //   {
    //     title: "imprint",
    //     href: "#",
    //   },
    //   {
    //     title: "contact",
    //     href: "#",
    //   },
    // ];
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <img src="https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/659c7d71eba501ec8d40cf32_Group%2019.png" />
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
          <FaYoutube />
        </div>
      </div>
      <hr />

      <div className={styles.third}>
        <p>© 2024 Wonderful Stays. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer