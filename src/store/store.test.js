import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
//import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
  it('Should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, {courses: []});
    const course = {
      title: 'Clean Code'
    };
    const course2 = {
      title: 'Next Test'
    };

    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);
    const action2 = courseActions.createCourseSuccess(course2);
    store.dispatch(action2);

    // assert
    const actual = store.getState().courses[0];
    const actual2 = store.getState().courses[1];
    const expected = {
      title: 'Clean Code'
    };
    const expected2 = {
      title: 'Next Test'
    };
    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
  });

  it('should handle updating courses', () => {
    // arrange
    const store = createStore(rootReducer, {courses: []});
    const existingCourse = {
      id: 'some-course',
      title: 'Some Course'
    };
    const updCourse = {
      id: 'some-course',
      title: 'Updated Course'
    };

    const actionCreate = courseActions.createCourseSuccess(existingCourse);
    const action = courseActions.updateCourseSuccess(updCourse);
    store.dispatch(actionCreate);
    store.dispatch(action);

    // assert
    const actual = store.getState().courses[0];
    const expected = {
      id: 'some-course',
      title: 'Updated Course'
    };

    expect(actual).toEqual(expected);
  });
});

