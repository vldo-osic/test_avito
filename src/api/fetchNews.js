import axios from "axios"

async function getLastNewsIds() {
    return axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
                .then( response => response.data.slice(0, 100))
}

export async function getById(id) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then( response => response.data)
}

export async function fetchNews() {
    return getLastNewsIds()
            .then( newsIds => Promise.all( 
                newsIds.map( newsId => 
                    getById(newsId)
                )
            )
            .then(newsList => newsList)
        )
        .catch(error => error.message)
}