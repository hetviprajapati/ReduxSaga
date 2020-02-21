import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch} from 'react-router-dom'

import Login from './component/ReduxSaga/Login';
import Fetch from './component/ReduxSaga/Display/Dispaly';
import Register from './component/ReduxSaga/Register/Register';
import CRoute from './CustomRoute/CustomRoute';
import Header from './Layout/Header';

function App() {
  const admin='admin';
  const user='user';
  return (
    <div>
      <Router>
        <Header></Header>
          <Switch>
                <CRoute exact path="/" component={Login} />
                <CRoute  crole={[admin,user]} path="/register" component={Register} />
                <CRoute cprivate crole={[admin]} path="/display" component={Fetch} />
                {/* <Route cprivate crole={[admin]} path="/viewuser" component={viewUser} />
                <Route  path="/unAuthorizedAccess" component={unAuthorizedAccess} /> */}
           </Switch>
        </Router>
    </div>
  );
}

export default App;
