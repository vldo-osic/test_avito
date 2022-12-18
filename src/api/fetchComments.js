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
            .then(response => response.kids)
            .then(response => Promise.all(
                response
                    .map(commentId => getById(commentId))
                    )
            )
            .catch(error => error.message)
}