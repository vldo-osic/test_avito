import { getById } from "./fetchNews";

// async function getCommentTree(node) {

//     const commentNode = {
//         id: node.id,
//         author: node.author,
//         text: node.text,
//         children: [node.children]
//     }
//     const childrenCommentsIds = [commentNode.children]
//     return childrenCommentsIds.map(commentId => 
                
//     )

// }

export async function fetchCommentsRoot(newsId) {
    return getById(newsId)
            .then(response => Promise.all(
                response.data.children
                    .map(comment => 
                        getById(comment)
                        )
                    )
            )
            .then(response => console.log(response.data))
            .catch(error => error.message)
}