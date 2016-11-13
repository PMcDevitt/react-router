import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Content from './Content.jsx'
import OrderSummary from './OrderSummary.jsx'
import SvdCheck from './SvdCheck.jsx'

class App extends Component{
	render(){
		return(
			<Router history={browserHistory}>
				<Route path='/hardwarerequest' component={Content} />
					<Route path='/hardwarerequest/order' component={OrderSummary} />
					<Route path='/hardwarerequest/svdcheck' component={SvdCheck} />
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('entry-point'))
