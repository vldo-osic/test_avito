import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css' 
export const NewsItem = ({id, title, score, author, date}) => {


    return (
        <Link to={`/list/${id}`} style={{textDecoration: 'none'}}>
            <div className='newsItem'>
                <h2> {title} </h2>
                <h2> {score} </h2> 
                <h3> {author} </h3> 
                <h3> {date} </h3>
            </div>
        </Link>
    )
}
