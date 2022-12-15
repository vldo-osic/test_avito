import React from 'react'
import { useDispatch } from 'react-redux'
import { newsFetcher } from '../../../store/reducers/actionCreator'
import classes from './UpdateNewsButton.module.css'

export const UpdateButton = ({children, ...props}) => {

    const dispatch = useDispatch()
    const updateNews = () => dispatch(newsFetcher())

    return (
        <button onClick={() => updateNews()} className={classes.updBtn}>
            {children}
        </button>
    )
}
