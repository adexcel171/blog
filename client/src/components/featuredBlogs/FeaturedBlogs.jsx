
import classes from './featuredBlogs.module.css'
import  tech from '../../assets/data2.jpg'
import  mountain from '../../assets/mountain1.jpg'
import  mountain2 from '../../assets/mountain2.jpg'

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <div className={classes.cards}>
      <img src={tech} alt=""  width='300'  height='250' />
        <h3>tech and more</h3>
        <p>Explore all you need about tech</p>
        <div className={classes.btn}>Explore more</div>

        </div>
      <div className={classes.cards}>
      <img src={mountain} alt=""  width='300'  height='250' />
        <h3>Nature and more</h3>
        <p>Explore the world of nature</p>
        <div className={classes.btn}>Explore more</div>


        </div>
      <div className={classes.cards}>
      <img src={mountain2} alt=""  width='300'  height='250' />
        <h3>Adventures</h3>
        <p>lets take you on a wild trip</p>
        <div className={classes.btn}>Explore more</div>


        </div>
      
       
      </div>

    </div>
  )
}

export default FeaturedBlogs