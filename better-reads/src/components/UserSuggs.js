import React, { useState } from 'react'
import UserSugg from './UserSugg'

const UserSuggs = (props) => {
    console.log("usersuggs props", props)


    return(
        <div>
            <h1>Top 5 Suggestions!</h1>

           {props.books.map((book, index) => {
               return(
                  <UserSugg key={index} title={book.book_title} desc={book.book_desc} author={book.book_authors} cs={book.cs}/> 
               )
           })}
       
        </div>
    )
}

export default UserSuggs