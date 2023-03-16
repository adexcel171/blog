import React from 'react'
import classes from './featuredBlogs.module.css'
import natureImg1 from '../../assets/nature1.jpg'
import dataImg2 from '../../assets/data2.jpg'
import {MdOutlinePreview} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'

const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={natureImg1} alt="" />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>Nature is good for relaxation</h4>
                <p className={classes.blogDesc}>
                  A nice view of a mood at night. <br /> beautiful mother nature. relaxation is key
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Chuks</span>
                  <span><span>Created:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={dataImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Data Science</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, hic inventore? Atque?
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span>Chinda Kelvin</span>
                  <span><span>Created:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={dataImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Data analysis</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, hic inventore? Atque?
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span><span>Author:</span> Stephen Ufort</span>
                  <span><span>Created:</span> 27-02-2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs