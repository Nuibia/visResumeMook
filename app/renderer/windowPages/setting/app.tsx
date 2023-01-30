import store from '@src/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Setting from './index';

function App() {
  return (
    <Provider store={store}>
      <Setting />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
