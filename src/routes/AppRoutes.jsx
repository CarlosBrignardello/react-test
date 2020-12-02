import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from '../components/Header';
import CleverTest01 from '../pages/CleverTest01'
import CleverTest02 from '../pages/CleverTest02'
import CleverTest03 from '../pages/CleverTest03'
import App from '../App';
import CreateUser from '../pages/CreateUser'
import store from '../redux/store'
import { Provider } from 'react-redux'

export const AppRouter = () => {
  return (
    <Provider store={store}>
     <Router>
       <>
         <Header />
         <Switch>
           <Route exact path="/test1" component={ CleverTest01 } />
           <Route exact path="/test2" component={ CleverTest02 } />
           <Route exact path="/test3" component={ CleverTest03 } />
           <Route exact path="/create-user" component={ CreateUser } />
           <Route exact path="/" component={ App } />
           <Redirect to="/" />
         </Switch>
       </>
     </Router>
    </Provider>
  )
}