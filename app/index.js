var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends Component {
  render(){
    return(
      <div>
        Hello World
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app');
)
