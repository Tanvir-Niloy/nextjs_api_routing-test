import React from 'react';
import classes from '../styles/Books.module.css'


const BookItem = ({id,name,author,description,imgURL}) => {
  return (
    
    <li className={classes.listItem}>
        <img src={imgURL} alt={name} className={classes.img}/>
        <h3>{name}</h3>
        <h4>Author:{author}</h4>
        <p>{description}</p>
    </li>
  )
}

export default BookItem