import React from 'react'
import { useParams } from 'react-router'
import { CommentsList } from '../components/newsComponents/CommentsList'
import { NewsInfo } from '../components/newsComponents/NewsInfo'

export const NewsPage = () => {
    const {id} = useParams()
    
    return (
        <div className='newsPage'>
            <CommentsList newsId={id}/>
        </div>
    )
}
