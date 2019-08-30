import React, { useState } from 'react' 
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth.js'

const ReccForm = (props) => {
    console.log("in ReccForm",props)
    const [bookdesc, setBookDesc] = useState({book_desc: ''})
    const [recsult, setRecsult] = useState([])

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
              console.log("within post in ReccForm", response.data);
              let result = Object.values(response.data).map(value => value )

              setRecsult(result)

              handleRecsult(result)

              props.history.push('/userbooks')

            
          })
          .catch(err => console.log("error in BooksAPI handleSub", err.response))
    
      

        setBookDesc({book_desc: ''})

        

        // props.sendData(recsult)
      };
    
      console.log("on line 42", recsult)

      const handleRecsult = (res) => {
        props.sendData(res)
      }

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