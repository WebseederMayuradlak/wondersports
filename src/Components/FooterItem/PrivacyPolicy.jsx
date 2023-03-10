
import React from 'react'
import { Link } from 'react-router-dom';
import "./Privacy.css"
// import PrivacyCard from './PrivacyCard';
import { Button } from '@mui/material';


function PrivacyPolicy() {

var Title="Responsibility  of Visitor ",text= " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, corrupti ea beatae in assumenda et atque neque unde architecto dolorum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi aperiam accusamus, mollitia rem possimus illo culpa, facilis exercitationem ea corporis repellendus maiores numquam aut blanditiis cum sequi, corrupti quae omnis itaque illum optio animi eius! Fuga ad possimus blanditiis ab quam? Officiis asperiores aliquid sapiente aliquam! Inventore, soluta culpa."
  return (
    <>
      <div className="privacy-policy">
        <div className="privacy-header">
            <h1>Privacy Policy </h1>
        </div>
        <div className="privacy-main">
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />
       <PrivacyCard content={text} title={Title} />

             <Button variant='contained' href='/home' sx={{margin:"3% 0%"}} >Go Back</Button>
        </div>
      </div>
    </>
  )
}
function PrivacyCard (props){
  return (
    <>
    <div className="p-card">
      <h3>{props.title}</h3>
      <p>
       {props.content}
      </p>
    </div>
  </>
  )
}

export default PrivacyPolicy;
