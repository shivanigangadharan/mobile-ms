import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import LandingPage from './landing-page';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ProblemList from './components/track-problem/problem-list';
import Filter from './components/track-problem/filter';
import Dashboard from './components/track-problem/dashboard';
import Details from './components/track-problem/details';
import Record from './components/problem-collection/record-meeting';
import Notes from './components/problem-collection/meeting-notes';
import Problem from './components/problem-collection/problem';
import Map from './components/mapping/App';
import Advanced from './components/mapping/advanced';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query, Mutation } from 'react-apollo';
import Login from '../src/components/mapping/log-in';
import AuthProvider from './auth';
import { AuthContext } from '../src/auth';

function App(props) {
  console.log(useContext(AuthContext));
  const [t, setT] = useContext(AuthContext);
  const client = new ApolloClient({
    uri: "https://delhimohallasabha.herokuapp.com/v1/graphql",
    headers: t == null ? {} : {
      'Authorization': `Bearer ${t}`,
    }
  });
  console.log("APP JWT = ", t);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/mobile" exact component={Login} />
          componentDidMount(){
            document.title = "Mohalla Sabha Mobile App"
          }
          <Route path="/mobile/landingpage" component={LandingPage} />
          <Route path="/mobile/problemlist" component={ProblemList} />
          <Route path="/mobile/dashboard" component={Dashboard} />
          <Route path="/mobile/filter" component={Filter} />
          <Route path="/mobile/details" component={Details} />
          <Route path="/record/" component={Record} />
          <Route path="/notes/" component={Notes} />
          <Route path="/problem/" component={Problem} />
          <Route path="/mapping/" component={Map} />
          <Route path="/advanced/" component={Advanced} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
