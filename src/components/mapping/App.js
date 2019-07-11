import React, { useState } from 'react';
import List from './list-screen';
import Login from './log-in';
import ManageArea from './manage-area';
import ManageMS from './manage-ms';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Map() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/mapping/login" component={Login} />
          <Route path="/mapping/list" component={List} />
          <Route path="/mapping/maptable" component={MapTable} />

        </Switch>
      </Router>
    </div>
  );
}

function MapTable() {
  const [tabchoice, setTabChoice] = useState('area');
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item onClick={e => { setTabChoice("area") }}>
          <Icon type="mail" />
          Manage Area-wise
</Menu.Item>
        <Menu.Item onClick={e => { setTabChoice("ms") }}>
          <Icon type="mail" />
          Manage MS-wise
</Menu.Item>
      </Menu>
      <div hidden={tabchoice == "area" ? false : true}>
        <ManageArea />
      </div>
      <div hidden={tabchoice == "area" ? true : false}>
        <ManageMS hidden={true} />
      </div>

    </div>
  )
}

export default Map;
