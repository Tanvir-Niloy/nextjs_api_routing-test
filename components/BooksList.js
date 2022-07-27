import {useState,useEffect} from 'react'
import BookItem from './BookItem';
import classes from '../styles/Books.module.css'

const BooksList = () => {

    const [data, setData] = useState();

    const sendRequest = ()=>{

        fetch("/api/books")
        .then((res)=>res.json())
        .then((data)=>setData(data.message))
        .then((error)=>console.log(error))

    }

    useEffect(() => {
      sendRequest()
    }, [])
    
  return (
    <div >
        <ul className={classes.listContainer}>
            {data && data.map((item,index)=>(

                <BookItem 
                key={index} 
                description={item.description} 
                imgURL={item.imgURL}
                author={item.author}
                name={item.name}
                />
            ))}
        </ul>
    </div>
  )
}

export default BooksList