import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

import initialState from './reducers/initialState';

function onEnterCall() {
  console.log('onEnter hook triggered');
  initialState.counter++;
  window.localStorage.setItem('onEnterHookCounter', initialState.counter);
}

function onLeaveCall() {
  console.log('onLeave hook triggered');
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} onEnter={onEnterCall} onLeave={onLeaveCall} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
  </Route>
);
