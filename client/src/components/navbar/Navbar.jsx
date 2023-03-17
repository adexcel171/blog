import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.jpg'
import { useState } from 'react' 
import {logout} from '../../redux/authSlice'
import {useSelector, useDispatch} from 'react-redux'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>Excel</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contacts</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={logoImg} className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              <span onClick={handleLogout} >Logout</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar