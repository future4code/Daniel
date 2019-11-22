import { DayCard } from '.';
import TaskItem from '../../components/TaskItem';
import React from 'react'
import { shallow } from 'enzyme'

describe("DayCard", () => {
    test("props are rendering correctly", () => {
        const mockTasks = [{ day: "Segunda", text: "Comprar ração pra Morgana" }]
        const component = shallow(<DayCard day="Segunda" tasks={mockTasks} />)
        const taskItem = component.find(TaskItem)

        expect(taskItem).toHaveLength(1)
    });
    test("handle undefined props", () => {

       expect(() => shallow(<DayCard day="Segunda"/>)).not.toThrow();
    });
})