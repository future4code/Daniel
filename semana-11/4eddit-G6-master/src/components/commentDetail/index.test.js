
import React from "react";
import { shallow } from "enzyme";
import CommentDetail from "./index";

const mockComment = {
    votesCount: -1,
    userVoteDirection: -1,
    id: "RVxZpEL8AaSaoA9nOWNF",
    username: "darvas",
    text: "Comentario 1!"
}

describe("CommentDetail", () => {
    test("Upvote Button", () => {
        const mockVoteFunction = jest.fn();

        const component = shallow(
            <CommentDetail comment={mockComment} onVote={mockVoteFunction} />
        );

        const upvoteButton = component.find({ id: 'UpvoteButton' });
        expect(upvoteButton).toHaveLength(1);

        upvoteButton.simulate("click");
        expect(mockVoteFunction).toHaveBeenCalledWith("RVxZpEL8AaSaoA9nOWNF",1);
    });
    test("Downvote Button", () => {
        const mockVoteFunction = jest.fn();

        const component = shallow(
            <CommentDetail comment={mockComment} onVote={mockVoteFunction} />
        );

        const upvoteButton = component.find({ id: 'DownvoteButton' });
        expect(upvoteButton).toHaveLength(1);

        upvoteButton.simulate("click");
        expect(mockVoteFunction).toHaveBeenCalledWith("RVxZpEL8AaSaoA9nOWNF",-1);
    });
    test("Posted text", () => {
        const component = shallow(
            <CommentDetail comment={mockComment}/>
        );

        const postedText = component.find({ id: 'PostedText' });
        expect(postedText).toHaveLength(1);
        expect(postedText.props().children).toContain("darvas");
    });
})