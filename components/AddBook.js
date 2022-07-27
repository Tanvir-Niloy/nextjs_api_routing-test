import {useState} from 'react'
import classes from '../styles/Form.module.css'

const AddBook = () => {

    const [inputs, setInputs] = useState({

         name:"",
         author:"",
         description:"",
         imgURL:""
    })

    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log(inputs)
    }

  return (
    <div className={classes.container}>
        <form className={classes.formControl} onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input type="text" name='name' value={inputs.name} onChange={(e)=>setInputs(e.target.value)} placeholder='book name'/>
            <label htmlFor="author"></label>
            <input type="text" name='author'value={inputs.author} onChange={(e)=>setInputs(e.target.value)} placeholder='author name'/>
              <label htmlFor="description"></label>
            <input type="text" name='description' value={inputs.description} onChange={(e)=>setInputs(e.target.value)} placeholder='book description'/>
            <label htmlFor="imgURL"></label>
            <input type="text" name='imgURL' value={inputs.imgURL} onChange={(e)=>setInputs(e.target.value)} placeholder='book image'/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default AddBook