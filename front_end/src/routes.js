import React from 'react';
import { Route } from 'react-router-dom';

import Login from './containers/login';



const BaseRouter = () => (
	<div>
		{/* <Route exact path='/' component={Welcome}/> */}
		<Route exact path='/' component={Login}/>				
	</div>
)

export default BaseRouter
