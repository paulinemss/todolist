import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import AddToDo from './components/AddToDo';

class App extends React.Component {
  render() {
    return (
      <div>
				<Header />
        <AddToDo />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)