import { shallow,mount } from 'enzyme'
import React from 'react';
import NewTaskForm from './index';

describe("NewTaskForm",()=>{
    test("has an input, a button and a select",()=>{
        const component = shallow(<NewTaskForm/>);

        const input = component.find('input');
        const select = component.find('select');
        const button = component.find('button');

        expect(input).toHaveLength(1);
        expect(button).toHaveLength(1);
        expect(select).toHaveLength(1);

    });
    test("call createTask props on form submit",()=>{
        const mockFunction = jest.fn()
        const preventDefault = jest.fn();
        const component = shallow(<NewTaskForm createTask={mockFunction}/>);
        const button = component.find('form');

        button.simulate('submit', { preventDefault});

        expect(mockFunction).toHaveBeenCalled();
    });
})