import React from 'react'
import "./Mountain.css"
import Icemountain from '../BlogsImage/icemountaine.jpg'

import Blog from './components/Blog'
import Info from './components/Info'

const Mountain = () => {
    let data = {
        heading : "the adventure",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo numquam, fugiat rerum quod nulla esse deleniti itaque ullam, provident dolorem quasi ea hic reprehenderit mollitia fugit, impedit optio. Tempora, ut."
    }
  return (
    <>
        <div className='mountain'>
            <Blog />
            <Info />
        </div>  
    </>
  )
}

export default Mountain
