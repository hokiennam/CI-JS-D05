import '../assets/css/BookList.css'
import { Book } from './Book'
import React from 'react';


export function BookList(props) {
    return (
        <div className="booklist-area border">
            {props.books.map(book => {
                return (
                    <Book {...book}/>

                )
            })}
        </div>
    )
}