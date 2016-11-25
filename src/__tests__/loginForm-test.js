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

    it("basic render", function() {
        let inputs = this.renderedDOM().querySelectorAll("input");
        expect(inputs).toExist();
    });
});