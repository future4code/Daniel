import { shallow } from 'enzyme'
import { Planner } from '.'
import React from 'react';
import DayCard from '../DayCard/index';

const mockTasks = [
{
    text: "Firefox é melhor que o Chrome!",
    day: "Segunda"
},
{
    text: "Ranger Verde era o mais forte!",
    day: "Quarta"
},
{
    text: "Atlético Mineiro nem é time!",
    day: "Segunda"
}
]
const testAction = jest.fn();
describe("Planner component", () => {
    test("call fecth action on componentDidMount", () => {
        const component = shallow(<Planner fetchTasksAction={testAction}/>)
        expect(testAction).toHaveBeenCalled();
    });
    test("render all 7 days", () => {
        const component = shallow(<Planner fetchTasksAction={testAction} allTasks={mockTasks}/>)
        const allDayCard = component.find(DayCard)
        expect(allDayCard).toHaveLength(7);
    });
});