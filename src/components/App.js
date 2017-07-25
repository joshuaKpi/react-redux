import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />

        <Route exact path="/" component={HomePage}/>
        <Route path="/courses" component={CoursesPage}/>
        <Route path="/course/:id" component={ManageCoursePage}/>
        <Route path="/course" component={ManageCoursePage} exact />
        <Route path="/about" component={AboutPage}/>
      </div>
    );
  }
}

App.propTypes = {
  match: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
