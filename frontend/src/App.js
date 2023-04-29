import React from 'react';
import{useSelector } from'react-redux'
import Login from './view/login/login'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Sidebar from'./view/sidebar/sidebar'
import ViewBugs from './view/Pages/viewBugs';


function App() {
  const {auth} =useSelector(state => state)
  return (
  <Router>
  {!auth.loggedIn ? <Login/>:
  <>
     <Sidebar />
     <Switch>
     <Route path="/viewbugs"><ViewBugs /></Route>
    </Switch>
     
  </>
  }
  </Router>
  );
}

export default App;
