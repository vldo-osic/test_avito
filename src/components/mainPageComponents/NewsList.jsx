import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newsFetcher } from '../../store/reducers/actionCreator'
import { NewsItem } from './NewsItem'

export const NewsList = () => {
    const {newsList, isLoading, error} = useSelector(state => state.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(newsFetcher())
    }, [])

    return (
        <div className='newsList'>
            { isLoading && <h1>Идет загрузка...</h1>}
            { newsList.map((news, i) => 
                 <NewsItem
                    key={i}
                    id={news.id} 
                    title={news.title} 
                    score={news.score} 
                    author={news.by}
                    date={new Date(news.time).toUTCString()} />)
            }
            { error && <h1>Ошибка</h1>}
        </div>
    )
}
