import React, { useState }from 'react'
import axiosWithAuth from '../utils/axiosWithAuth.js'

const UserSugg = (props) => {

    const [addBook, setAddBook] = useState({book_authors: props.author, book_desc: props.desc, book_title: props.title, cs: props.cs })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("within handleSubmit", addBook);
    
        axiosWithAuth().post('https://betterbackend.herokuapp.com/api/books/save', addBook)
          .then(response => {   
              console.log("within post in UserSugg", response.data);
              

            //   props.history.push('/UserLibrary')

          })
          .catch(err => console.log("error in UserSugg handleSub", err.response))
    }

    return(
        <div>
           <div>{props.title}</div>
           <div>{props.author}</div>
           <div>{props.desc}</div>
           <button onClick={handleSubmit} type="submit">Add</button>
        </div>
    )
}

export default UserSugg