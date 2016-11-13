import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

// import App from './App.jsx'
import Content from './Content.jsx'
import OrderSummary from './OrderSummary.jsx'
import SvdCheck from './SvdCheck.jsx'

class Index extends Component{
	render(){
		return(
			<Router history={hashHistory}>
				<Route path='/' component={Content} />
				<Route path='/order' component={OrderSummary} />
				<Route path='/svdcheck' component={SvdCheck} />
			</Router>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('entry-points'))
