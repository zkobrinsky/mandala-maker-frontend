import React from 'react';
import './App.css';
import SandboxSketch from './components/SandboxSketch'
import Sketches from './components/Sketches'
import CreateSketch from './components/CreateSketch'
import SketchShow from './components/SketchShow'
import MyNav from './components/MyNav'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { getSketches } from './redux/actions/sketchActions';
// import Button from 'react-bootstrap/Button';



class App extends React.Component {

  componentDidMount() {
    this.props.getSketches()
  }

  render () {
    return (
    <div className="App">
      <Router >
      <MyNav />
        <Switch>
          <Route path="/sketches/new" component={CreateSketch}/>
          <Route path="/sketches/:id" render={(routerProps) => <SketchShow {...routerProps}/>}/>
          <Route path="/sketches" component={Sketches}/>
          <Route path="/"
          render={(props) => (
            <SandboxSketch {...props} angle={0} rotateRate={0.5} />
          )} 
            />

        </Switch>
      </Router>
    </div>
    )
  }
}

export default connect(null, { getSketches })(App)
