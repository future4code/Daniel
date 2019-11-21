import { shallow } from 'enzyme'
import { Planner } from '.'
import React from 'react';
import * as fetchTasksAction from '../../actions/expenses';


describe("Planner component", () => {
    test("call fecth action on componentDidMount", () => {
        const component = shallow(<Planner />)
        fetchTasksAction = jest.fn();
        expect(fetchTasksAction).toHaveBeenCalled();
    })
})