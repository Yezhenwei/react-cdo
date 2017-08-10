/*
 * 路由
 * Date 2016-12-15
 * Author Yezhenwei
 */

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '../css/index.less';
import store from '../store/store.js';
import "babel-polyfill";
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import NotFound from './NotFound';

const BackApp = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('./manager/App').default);
	}, 'BackApp')
}

import Login from './manager/Login';

import State from './manager/State';

import Props from './manager/Props';

import Redux from './manager/Redux';

render(
	<Provider store={store}>
		<Router history={browserHistory} >
			<Route path="/" onEnter={(nextState, replace) => replace('/state')} getComponent={BackApp} />
			<Route getComponent={BackApp}>
				<Route path="/state">
					<IndexRoute paths="/state" component={State} />
					<Route path="/state" component={State} />
					<Route path="/props" component={Props} />
					<Route path="/redux" component={Redux} />
				</Route>
			</Route>
			<Route path="login" component={Login} />
			<Route path="*" component={NotFound} />
		</Router>
	</Provider>,
	document.getElementById('app')
);
