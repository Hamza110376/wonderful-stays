import styles from "./Navbar.module.css"

function Navbar() {
    const NavItems=[
      
      {
      name: "Accommodation",
      link: "../pages/Accommodation.jsx"
    },
    {
      name: "Categories",
      link: "../pages/Categories.jsx"
    },
      {
      name: "About Us",
      link: "../pages/Aboutus.jsx"
    },
      {
      name: "Inspiration",
      link: "../pages/Inspiration.jsx"
    }
  
  ]
  return (
   <div className= {styles.nav}>
<img className={styles.img} src="https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/659b1279b53dc2c262af466f_wonderful_stays-p-500.png"/>
<div className={styles.items}>
{
    NavItems.map((items)=><a className={styles.a} key={items} href={items.link}>{items.name}</a>)
}
</div>

   </div>
  )
}

export default Navbar