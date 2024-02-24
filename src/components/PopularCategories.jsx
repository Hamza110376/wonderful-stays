import Styles from "./PopularCategories.module.css"
function PopularCategories({categories}) {


  return (

   
    <>
        <div className={Styles.main}>
<p>Categories</p>
<h1>Popular Categories</h1>
<div className={Styles.wrapper}>

<div className={Styles.card}>
<img className={Styles.wellness} src="/src/assets/wellness.jpg"/>
<div className={Styles.inner}>
<h3 className={Styles.H3}>Wellness & spa</h3>
<p className={Styles.P}>Accommodation</p>
<div className={Styles.left}>
  <img className={Styles.image} src="/src/assets/arrow-right.png"/>
</div>
</div>


</div>

<div className={Styles.stays}>
{
categories.map((items)=> <div key={items} className={Styles.stay}>
<img className={Styles.wellness2} src={items.image}/>
<div className={Styles.inner2}>
<h3 className={Styles.H32}>{items.title}</h3>
<p className={Styles.P2}>{items.exp}</p>
<div className={Styles.left2}>
<img className={Styles.image2} src={items.arrow}/>
</div>
</div>
</div>)
}


</div>



</div>
        </div>
    </>
  )
}

export default PopularCategories




