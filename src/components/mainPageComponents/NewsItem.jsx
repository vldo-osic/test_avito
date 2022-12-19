import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css' 
import Star from './UI/Star'
import './UI/star.css'

export const NewsItem = ({id, title, score, author, date}) => {


    return (
        <Link to={`/list/${id}`} style={{textDecoration: 'none'}}>
            <div className='newsItem'>
                <h2> {id} </h2>
                <h2> {title} </h2>
                <Star score={score}/>
                <h3> {author} </h3> 
                <h3> {date} </h3>
            </div>
        </Link>
    )
}
