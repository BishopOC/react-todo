import React from 'react';
import ReactDOM, {render} from 'react-dom';
import BodyStyle from 'body-style';
require('../style.css');

var destination = document.querySelector('#container');

class TodoItems extends React.Component {
  render(){
    var todoEntries = this.props.entries;

    function createTasks(item){
      return <li key={item.key}>{item.text}</li>
    }
    var listItems = todoEntries.map(createTasks);

    return(
      <ul className='theList'>
        {listItems}
      </ul>
    );
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      items: []
    }
  }
  addItem(e){
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this.inputElement.value,
        key: Date.now()
      }
    );
    this.setState({
      items: itemArray
    });

    this.inputElement.value = '';
    e.preventDefault();
  }
  render(){
    return (
      <div className='todoListMain'>
        <p><img className='img' src='../img/apps.png'/>React Todo List</p>
        <div className='header'>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this.inputElement = a} placeholder='enter task'>
            </input>
            <button type='submit'>add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
};

render(
  <div>
    <TodoList/>
    <div>
    </div>
  </div>,
  destination
);
