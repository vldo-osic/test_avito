import React from 'react'
import { useParams } from 'react-router'
import { CommentsRoot } from '../components/newsComponents/CommentsRoot'
import { NewsInfo } from '../components/newsComponents/NewsInfo'

export const NewsPage = () => {
    const {id} = useParams() 

    return (
        <div className='newsPage'>
            <NewsInfo newsId={id} />
            <CommentsRoot newsId={id}/>
        </div>
    )
}
