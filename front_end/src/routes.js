import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Login from './containers/Login';
//import UserSignup from './containers/user_signup';
import Signup from './containers/Signup';
import Donate from './containers/donate';
import UserDashboard from './components/user_dashboard'


const BaseRouter = () => (
	<div>
		<Route exact path='/' component={Welcome}/>
		<Route exact path='/Login' component={Login}/>
		<Route exact path='/donate' component={Donate}/>
		<Route exact path='/Signup' component={Signup}/>		
		{/* <Route exact path='/user_signup' component={UserSignup}/>		 */}
		<Route exact path='/user_dashboard' component={UserDashboard}/>	
	</div>

)

export default BaseRouter
