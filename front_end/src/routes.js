import React from 'react';
import { Route } from 'react-router-dom';

import Login from './containers/login';
import Welcome from './components/Welcome';



const BaseRouter = () => (
	<div>
		<Route exact path='/' component={Welcome}/>
		<Route exact path='/login' component={Login}/>		
	</div>
)

export default BaseRouter
