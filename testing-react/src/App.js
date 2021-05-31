import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function Home () {
  return (
    <>
      <p>home works!</p>
      <Link to="/about">Go to About</Link>
    </>
  )
}

function About () {
  return (
    <>
      <p>about works!</p>
      <Link to="/">Go to Home</Link>
    </>
  )
}

export default function App () {
  return (
    <Router>
      <div>
        <h1>Testing Landing Page Frameworks</h1>
        <h2>React</h2>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
