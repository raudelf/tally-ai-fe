import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';

const CLIENT_ID = '608950634863-oocf4589motggau92gukloto2l01fgha.apps.googleusercontent.com';

class GoogleBtn extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isLogined: false,
        accessToken: ''
      };
  
      this.login = this.login.bind(this);
      this.handleLoginFailure = this.handleLoginFailure.bind(this);
      this.logout = this.logout.bind(this);
      this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    }
  
    login (response) {
        console.log('Google info: ', response)
    }
  
    logout (response) {
      this.setState(state => ({
        isLogined: false,
        accessToken: ''
      }));
    }
  
    handleLoginFailure (response) {
      alert('Failed to log in')
    }
  
    handleLogoutFailure (response) {
      alert('Failed to log out')
    }
  
    render() {
      return (
      <div>
        { this.state.isLogined ?
          <GoogleLogout
            clientId={ CLIENT_ID }
            buttonText='Logout'
            onLogoutSuccess={ this.logout }
            onFailure={ this.handleLogoutFailure }
          >
          </GoogleLogout>: <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Sign in with Google'
            onSuccess={ this.login }
            onFailure={ this.handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
          />
        }
      </div>
    )
}
}

export default GoogleBtn;