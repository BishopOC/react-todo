import React from 'react';
import ReactDOM, {render} from 'react-dom';

var destination = document.querySelector('#container');

class HelloWorld extends React.Component {
  render(){
    return (
      <h1>Hello World</h1>
    );
  }
}

render(<HelloWorld/>, destination);
