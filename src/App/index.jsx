const Template = require('./component/template/index.jsx');
const Login = require('./component/login/index.jsx');
const storage = require('./component/events/storage.js');
const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
const Provider = ReactRedux.Provider;


ReactDOM.render(
    <Provider store = {storage}>
        <Router>
            <div className='App'> 
            <Route exact path = '/' component = {Template} />
            <Route exact path = '/login' component = {Login} />
            <Route exact path = '/alice' component = {Template} />
            <Route exact path = '/bob' component = {Template} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('container')
)