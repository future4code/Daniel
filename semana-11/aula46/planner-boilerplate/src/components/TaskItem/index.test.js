import { shallow } from 'enzyme'
import React from 'react';
import TaskItem from '.';

describe("TaskItem",()=>{
    test("render text",()=>{
        const mockText = "Coitado do Gugu :("
        const component = shallow(<TaskItem text={mockText}/>)
        const paragraph = component.find('p');
        
        expect(paragraph).toHaveLength(1);
        expect(paragraph.text()).toMatch(mockText);
    })
})