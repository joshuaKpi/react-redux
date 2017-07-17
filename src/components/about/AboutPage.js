import React from 'react';
import initialState from '../../reducers/initialState';
import toastr from 'toastr';


class AboutPage extends React.Component {
  static onEnterCall() {
  toastr.info('onEnter hook triggered', '', {"positionClass": "toast-bottom-right"});
  initialState.counter++;
  window.localStorage.setItem('onEnterHookCounter', initialState.counter);
}

  static onLeaveCall() {
  toastr.warning('onLeave hook triggered', '', {"positionClass": "toast-bottom-right"});

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
