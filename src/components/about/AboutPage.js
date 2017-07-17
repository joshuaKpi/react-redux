import React from 'react';
import initialState from '../../reducers/initialState';


class AboutPage extends React.Component {
  static onEnterCall() {
  console.log('onEnter hook triggered');
  initialState.counter++;
  window.localStorage.setItem('onEnterHookCounter', initialState.counter);
}

  static onLeaveCall() {
  console.log('onLeave hook triggered');
}
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Sone particular paragraph about this site created to train skills</p>
      </div>
    );
  }
}

export default AboutPage;
