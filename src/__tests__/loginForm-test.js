import expect from 'expect';
import LoginForm from '../forms/login';
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

describe("LoginForm component - test", () => {
    beforeEach(function () {
        this.component = TestUtils.renderIntoDocument(<LoginForm/>);
        this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
    });

    it("Testing structure", function() {
        let inputs = this.renderedDOM().querySelectorAll("input");
        expect(inputs.length).toEqual(2);
        expect(inputs[0].id).toEqual("login_username");
        expect(inputs[1].id).toEqual("login_password");

        let buttons = this.renderedDOM().querySelectorAll("button");
        expect(buttons.length).toEqual(1);
        expect(buttons[0].id).toEqual("signin_btn");
    });
});