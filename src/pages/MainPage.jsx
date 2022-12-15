import React from 'react'
import { NewsList } from '../components/mainPageComponents/NewsList'
import { UpdateButton } from '../components/mainPageComponents/UI/UpdateNewsButton.jsx'
import './styles.css'
export const MainPage = () => {
    return (
        <div className='mainPage'>
            <UpdateButton > Обновить </UpdateButton>
            <NewsList />
        </div>
    )
}
