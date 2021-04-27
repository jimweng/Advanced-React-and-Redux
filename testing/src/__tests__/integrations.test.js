import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';

import App from 'components/App';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'fetched number 1'}, { name: 'fetched number 2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    //Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    //find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments').simulate('click');

    //Expect to find a list of comments!
    /* Too fast to call wrapped, and still not get data from store. So, add tiny little pause */
    // setTimeout(() => {
    //     wrapped.update();
    //     expect(wrapped.find('li').length).toEqual(2);

    //     done();
    // }, 100);

    // moxios offer a function that we don't have to calculate the time we get data from apis.
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);

        done();
        wrapped.unmount();
    })
});