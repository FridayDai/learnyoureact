import React from 'react';

export default class TodoBox extends React.Component{
  render() {
    return (
      <div className='todoBox'>
        <h1>Todos</h1>
        <TodoList data={this.props.data}/>
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
    render() {
        var todos = this.props.data.map(function(todo) {
            return (
                <Todo key={todo.id} title={todo.title}>{todo.detail}</Todo>
            )
        });
        return (
            <div className="todoList">
                <table style={style.tableContent}>
                    <tbody>
                        {todos}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TodoForm extends React.Component {
    render() {
        return  (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        )
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false}
    }
    handleChange(e) {
        this.setState({checked: e.target.checked})
    }

    render() {
        return (
            <tr>
                <td style={style.tdContent}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
                </td>
                <td  style={style.tdContent}>{this.props.title}</td>
                <td  style={style.tdContent}>{this.props.children}</td>
            </tr>
        )
    }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
};


let style = {
    tableContent: {
        border: '2px solid black'
    },
    tdContent: {
        border: '1px solid black'
    }
};