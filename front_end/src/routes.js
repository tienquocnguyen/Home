import React from 'react';
import { Route } from 'react-router-dom';

import Login from './containers/login';
import Signup from './containers/Signup';
import Donate from './containers/donate';
import UserSignup from './containers/user_signup';
import Welcome from './components/Welcome';
import UserDashboard from './components/user_dashboard';


const BaseRouter = () => (
	<div>
		<Route exact path='/donate' component={Donate}/>
		<Route exact path='/' component={Welcome}/>
		<Route exact path='/login' component={Login}/>		
		<Route exact path='/Signup' component={Signup}/>		
		<Route exact path='/user_signup' component={UserSignup}/>		
		<Route exact path='/user_dashboard' component={UserDashboard}/>		
	</div>

)

export default BaseRouter
