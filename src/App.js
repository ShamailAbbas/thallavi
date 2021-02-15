import { React } from 'react'
import Feeds from './components/Feeds.js'
import Navbar from './components/Navbar.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import Upload from './components/Upload.js'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Feeds} />
        <Route exact path='/Upload' component={Upload} />
        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default App
