import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';
import AppHeader from './AppHeader';
import './App.css';

const {
  REACT_APP_HOME_HOST: homeHost,  
  REACT_APP_ROOT_HOST: rootHost,
  REACT_APP_ABOUT_HOST: aboutHost,
} = process.env;

const Home = ({ history }) => (<>
  <MicroFrontend history={history} host={homeHost} name="home" />
</>);
const Createreactapp = ({ history }) => (
  <MicroFrontend history={history} host={rootHost} name="root" />
);
const About = ({ history }) => (
  <MicroFrontend history={history} host={aboutHost} name="about" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/home" component={Home} />        
        <Route exact path="/about" component={About} />
        <Route exact path="/root" component={Createreactapp} />
        {/* <Route exact path="/random" render={Random} /> */}
        {/* <Route exact path="/about" render={About} /> */}
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
