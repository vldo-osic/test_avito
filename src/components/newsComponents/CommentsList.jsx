import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { commentsRootFetcher } from '../../store/reducers/actionCreator'
import { Comment } from './Comment'

export const CommentsList = ({newsId}) => {
    const {commentsList, isLoading, error} = useSelector(state => state.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(commentsRootFetcher(newsId))
    }, [])

    return (
        <div>
            { isLoading && <div>Загрузка...</div> }
            { commentsList.map(comment => {
                console.log(comment)
                return <Comment key={comment.id} id={comment.id} />
            })}
            { error && <div>Ошибка сети</div> }
        </div>
    )
}
