import React, { useState } from 'react'

const UserSugg = (props) => {
    console.log("userbooks props", props)
    
    return(
        <div>
            <h1>Top 5 Suggestions!</h1>

           {props.books.map( (book) => {
               return(
                   <> 
                   <div>{book.book_authors}</div>
                   <div>{book.book_desc}</div>
                   <div>{book.book_title}</div>
                   </>
               )
           })}
       
        </div>
    )
}

export default UserSugg