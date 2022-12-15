import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { commentsRootFetcher } from '../../store/reducers/actionCreator'
import { Comment } from './Comment'

export const CommentsRoot = ({newsId}) => {

    const {commentsRoot, isLoading, error} = useSelector(state => state.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(commentsRootFetcher(newsId))
    }, )

    return (
        <div>
            { isLoading && <div>Загрузка</div> }
            { commentsRoot.map((comment, i) => 
                <Comment key={i} id={comment.id} />
            )}
            { error && <div>Ошибка сети</div> }
        </div>
    )
}
