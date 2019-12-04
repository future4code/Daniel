import React from 'react'
import { shallow,mount } from 'enzyme';
import {SignupPage} from './index';


describe("Signup page test", () => {

    test("Inputs exists", () => {
        const component = shallow(<SignupPage />);
        const usernameInput = component.find({id:"outlined-username-input"});
        const emailInput = component.find({id:"outlined-email-input"});
        const passwordInput = component.find({id:"outlined-password-input"});
        const submitButton = component.find({id:"submit-button"})

        expect(usernameInput).toHaveLength(1);
        expect(emailInput).toHaveLength(1);
        expect(passwordInput).toHaveLength(1);
        expect(submitButton).toHaveLength(1);
    })
})