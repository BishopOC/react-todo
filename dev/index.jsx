import React from 'react';
import ReactDOM, {render} from 'react-dom';
import BodyStyle from 'body-style';
require('../style.css');

var destination = document.querySelector('#container');

class TodoList extends React.Component {
  render(){
    return (
      <div className='todoListMain'>
        <div className='header'>
          <form>
            <input placeholder='enter task'>
            </input>
            <button type='submit'>add</button>
          </form>
        </div>
      </div>
    );
  }
};

render(
  <div>
    <TodoList/>
    <div>
      <BodyStyle style={{backgroundColor: '#66CCFF',
                         padding: '50px',
                         fontFamily: 'sans-serif'}}/>
    </div>
  </div>,
  destination
);
