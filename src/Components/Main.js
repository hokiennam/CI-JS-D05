import '../assets/css/Main.css'
import './BookList'
import { BookList } from './BookList'
import React from 'react';

export function Main(props){
    console.log(props)
    return (
        <div className="main-area">
            <BookList books={props.books}/>
        </div>
    )
}