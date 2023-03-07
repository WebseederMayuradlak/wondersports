import React from 'react'

function InterestCard(props) {
  return (
   
       <div className="interest-page " id={props.row?"page":""}>
        <div className="interest-vertical">
          <div className="vertical-1">
            <h1> {props.Title} </h1>
          </div>
          <div className="vertical-2">
            <a href="">Article</a>
          </div>
        </div>
        <div className="interest-horizontal" id={props.revv?"rev":""} >
          <div className="vertical-3">
            <a href="">Guide</a>
          </div>
          <div className="vertical-4">
            <a href="">Blogs</a>
          </div>
        </div>
      </div>
  )
}

export default InterestCard
