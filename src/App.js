import { React } from 'react'
import './css/App.css'
import Navbar from './components/Navbar.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import Upload from './components/Upload.js'
import Landingpage from './components/Landingpage.js'
import Detailedpage from './components/Detailedpage.js'
import Bookingpage from './components/Bookingpage.js'
import Rooms from './components/Rooms.js'
import Signup from './components/Signup.js'
import Login from './components/Login.js'
import { connect } from 'react-redux'
import Mybookings from './components/Mybookings.js'
import Admindashboard from './components/Admindashboard.js'
function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landingpage} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/detailedpage' component={Detailedpage} />
          <Route exact path='/bookingpage' component={Bookingpage} />
          <Route
            exact
            path='/mybookings'
            component={localStorage.user ? Mybookings : Landingpage}
          />
          <Route
            exact
            path='/admindashboard'
            component={
              localStorage.userrole === 'Admin' ? Admindashboard : Landingpage
            }
          />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Upload' component={Upload} />

          <Redirect to='/' />
        </Switch>
      </div>
    </>
  )
}
const mapStatetoProps = (state) => {
  return {}
}
export default connect(mapStatetoProps)(App)
