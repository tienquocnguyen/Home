import React from 'react';
import { Route } from 'react-router-dom';

import Login from './containers/login';
import Donate from './containers/donate';


const BaseRouter = () => (
	<div>
		{/* <Route exact path='/' component={Welcome}/> */}
		<Route exact path='/' component={Login}/>
		<Route exact path='/donate' component={Donate}/>
	</div>

)

export default BaseRouter
