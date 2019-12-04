import { feed } from './feed'
import { exportAllDeclaration } from '@babel/types'
const mockFeed =
    [
        {
            votesCount: 1,
            userVoteDirection: 1,
            commentsNumber: 2,
            id: "XFM8JtoESiWKqCml3Rjz",
            username: "darvas",
            text: "Oi gente! Bem vindos ao 4eddit :)"
        }
    ]

describe("Feed Reducer", () => {
    test("Set feed", () => {
        const testAction = {
            type: "SET_FEED",
            payload: {
                posts: mockFeed
            }
        }
        const result = feed(undefined,testAction)
        expect(result.posts).toMatchObject(mockFeed)
    })
})