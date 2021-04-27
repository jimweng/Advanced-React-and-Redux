import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

import Root from 'Root';

/**
 *  Practice: Full DOM Renderering 
 * 
 */

let wrapped = null;

beforeEach(() => {
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});


describe('the textarea', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });

    it('has a textarea that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, textarea gets empties', () => {
        // Adding the below script can make sure every step correct.
        //expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});