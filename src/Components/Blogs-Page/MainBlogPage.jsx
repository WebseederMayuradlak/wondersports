import React from 'react'
import "./main.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function MainBlogPage() {
  return (
    <div className='main-blog-page'>
      <div className="blog-content">
        <p>Travelling turns you into a <br /> great storyteller</p>
        <a href="" className='read'>read blog</a>
        <a href="">destinations <ArrowRightAltIcon fontSize='large' /> </a>
      </div>
      <div className="summer-guide-page">
        <div className="summer-1">
<h4>TOP TRAVEL DESTINATION FOR <br /> SUMMER 2022</h4>
        </div>
        <div className="summer-2">
<h4>COMPLETE GUIDE FOR YOUR <br /> FIRST BACKPACKING TRIP</h4>
        </div>
        <div className="summer-3">
<h4>BEST INSTAGRAM PHOTO <br /> SPOTS IN LONDON </h4>
        </div>
      </div>
    </div>
  )
}
