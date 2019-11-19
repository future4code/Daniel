import { setFeed, setPostDetail } from "./index";

const mockPostList = [
    {
        votesCount: 1,
        userVoteDirection: 1,
        commentsNumber: 2,
        id: "XFM8JtoESiWKqCml3Rjz",
        username: "darvas",
        text: "Oi gente! Bem vindos ao 4eddit :)"
    },
    {
        votesCount: 0,
        userVoteDirection: 0,
        commentsNumber: 3,
        id: "Umidqualquer",
        username: "darvas",
        text: "Oi gente! Bem vindos ao 4eddit :)"
    }
]
const mockPostDetail = 
{
  post: {
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
}


describe("Actions Sincronas", () => {
    test("setFeed Action", () => {
        const testAction = {
            type: "SET_FEED",
            payload: {
                posts: mockPostList
            }
        }
        const result = setFeed(mockPostList);
        expect(result).toMatchObject(testAction)
    });
    test("setPostDetail Action", () => {
        const testAction = {
            type: "SET_POST_DETAIL",
            payload: {
                post: mockPostDetail
            }
        }
        const result = setPostDetail(mockPostDetail);
        expect(result).toMatchObject(testAction)
    });
})