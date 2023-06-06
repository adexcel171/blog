import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p> At our Blog App, we believe evryone has a unique voice and story to share with the world. <br/> Whether your a seasoned witter, an aspiring blogger, or just someone wwho love to expresss their thought. excel blog provides you with perfect space to unleash your creativity.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +234 811 922 3162</span>
          <span>Instagram: admire_excellence</span>
          <span>Linkedin: Godswill Okenyi</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Nigeria</span>
          <span>Current Location: Abuja Nigeria</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer