import { post } from './post'
import { exportAllDeclaration } from '@babel/types'

const mockPostDetail =
{

    comments: [
        {
            votesCount: -1,
            userVoteDirection: -1,
            id: "RVxZpEL8AaSaoA9nOWNF",
            username: "darvas",
            text: "Comentario 1!"
        },
        {
            votesCount: 0,
            userVoteDirection: 0,
            id: "juOJJjXFi4ToIdY20wQf",
            username: "darvas",
            text: "Comentario 2!"
        }
    ],
    votesCount: 1,
    userVoteDirection: 1,
    commentsNumber: 2,
    id: "XFM8JtoESiWKqCml3Rjz",
    username: "darvas",
    text: "Oi gente! Bem vindos ao 4eddit :)"

}

describe("Post Reducer", () => {
    test("PostDetail Action", () => {
        const testAction = {
            type: "SET_POST_DETAIL",
            payload: {
                post: mockPostDetail
            }
        }
        const newPostDetail = post(undefined, testAction)
        expect(newPostDetail.postDetail).toMatchObject(mockPostDetail)
    })
})