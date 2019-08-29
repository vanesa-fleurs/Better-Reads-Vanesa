import React, { useState } from 'react' 
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth.js'

const ReccForm = () => {
 
    const [bookdesc, setBookDesc] = useState({book_desc: ''})

    const changeHandler = (event) => {
        event.preventDefault();
        setBookDesc({
            ...bookdesc, [event.target.name]: event.target.value
        })
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("within handleSubmit", bookdesc);
    
        axiosWithAuth().post('https://betterbackend.herokuapp.com/api/books/recommend', bookdesc)
          .then(response => {
              console.log(response);
            //   props.history.push('/protected')
          })
          .catch(err => console.log("error in BooksAPI handleSub", err.response))
    
    
        setBookDesc({book_desc: ''})
      };




    // useEffect ( ()=> {
    //     axiosWithAuth().get
    //     .then(response => {
    //         console.log("inBooksAPI get", response)
    //     //   setBook(response.data)
    //     //   console.log("in Books API get", response.data)
    //     })
    //     .catch(error => {console.log("error in Books API get", error)})
    // }, [])

    return (
      <div className="SearchBoxCont">
          <h1>I feel like reading...</h1>
          <form onSubmit={handleSubmit}>
              <input 
                  className="searchText"
                  type="text"
                  value={bookdesc.book_desc}
                  name="book_desc"
                  onChange={changeHandler}
              />
              <button type="submit">Find Now!</button>
          </form>
          
      </div>
    )
}

export default ReccForm 
// ('https://betterbackend.herokuapp.com/api/books/recommend')