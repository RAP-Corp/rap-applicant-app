import React, { Component } from 'react';
import {
    Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
// // Import the Home component to be used below
// import Home from './Home/Home'
// // Import the Maps component to be used below
// import Maps from './Maps/Maps'
// // Import the Blogs component to be used below
// import Blog from './Blog/Blog'

import NotFound from './NotFound/NotFound';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import asyncComponent from './AsyncComponent';
import store from './store';
import { Provider } from 'react-redux';

const Home = asyncComponent(() =>
    import('./Home/Home').then(module => module.default)
)

const Login = asyncComponent(() =>
    import('./Login/login_page').then(module => module.default)
)

const Maps = asyncComponent(() =>
    import('./Maps/Maps').then(module => module.default)
)

const Blog = asyncComponent(() =>
    import('./Blog/Blog').then(module => module.default)
)

//Routing for all different paths
const AdminHome = asyncComponent(() =>
    import('./Paths/AdminPath/adminHome').then(module => module.default)
)
const HiringManagerHome = asyncComponent(() =>
    import('./Paths/HiringManagerPath/hiringManagerHome').then(module => module.default)
)
const CommunicationsHome = asyncComponent(() =>
    import('./Paths/CommunicationsPath/communicationsHome').then(module => module.default)
)
const ApplicantHome = asyncComponent(() =>
    import('./Paths/ApplicantPath/applicantHome').then(module => module.default)
)

//Creating of history for redirecting
const history = createBrowserHistory();

class App extends Component {
    render () {
        return (
          <Provider store={store}>
            <Router history={history}>
                <div>
                    <header className="header">
                        <nav className="navbar container">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Recruitment Assistance Portal</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/login">
                                  <span className="navbar-item">Login</span>
                                </Link>
                                <Link to="/maps">
                                    <span className="navbar-item">Maps</span>
                                </Link>
                                <Link to="/blog">
                                    <span className="navbar-item">Blog</span>
                                </Link>
                            </div>
                        </nav>
                    </header>

                    <section className="content">
                        <Switch>
                        //Specific paths for reference anywhere in the app
                            <Route exact path="/" component={Login} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/admin" component={AdminHome} />
                            <Route exact path="/hiringManager" component={HiringManagerHome} />
                            <Route exact path="/applicant" component={ApplicantHome} />
                            <Route exact path="/communications" component={CommunicationsHome} />
                            <Route path="/maps" component={Maps} />
                            <Route path="/blog" component={Blog} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </section>
                </div>
            </Router>
          </Provider>
        )
    }
}

export default App;
