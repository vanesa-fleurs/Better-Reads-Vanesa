import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth.js'

const BooksAPI = () => {
 
    const [book, setBook] = useState([])

    useEffect ( ()=> {
        axiosWithAuth().get('https://betterbackend.herokuapp.com/api/books')
        .then(response => {
            console.log("inBooksAPI get", response)
        //   setBook(response.data)
        //   console.log("in Books API get", response.data)
        })
        .catch(error => {console.log("error in Books API get", error)})
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default BooksAPI 