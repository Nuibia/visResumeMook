import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './title';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>可视化简历平台</div>
          <div>这是 ELectron + React </div>
          <Title text="测试" />
        </Route>
      </Switch>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
