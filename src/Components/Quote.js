import React from 'react'

export default function ({quoteAuthor,quoteText}){
    return (
        <div style={{display:'block',margin:'auto'}} >
            <h1>{quoteAuthor}</h1>
            <p>{quoteText}</p>
        </div>
    )
}