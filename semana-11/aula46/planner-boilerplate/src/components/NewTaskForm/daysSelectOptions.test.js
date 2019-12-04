import { shallow } from 'enzyme'
import React from 'react';
import DaysSelectOptions from './daysSelectOptions';

describe("React.Fragment days",()=>{
    test("render all 7 days",()=>{
        const component = shallow(<DaysSelectOptions/>);

        const options = component.find('option');

        expect(options).toHaveLength(7);
    })
})