import React from 'react';
import initialState from '../../reducers/initialState';
import toastr from 'toastr';


class AboutPage extends React.Component {

  componentWillMount() {
    toastr.info('onEnter "event" triggered in meaning of router v4', '', {"positionClass": "toast-bottom-right"});
    initialState.counter++;
    window.localStorage.setItem('onEnterHookCounter', initialState.counter);
  }

  componentWillUnmount() {
    toastr.warning('onLeave "event" triggered in meaning of router v4', '', {"positionClass": "toast-bottom-right"});
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
