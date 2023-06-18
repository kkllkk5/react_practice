import React, { Component } from 'react';
export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: '',
            due: ''
        };
    }

    onNameInput = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    onDueInput = (e) => {
        this.setState({
            due: e.target.value,
        })
    }

    addTodo = () => {
        const { todos, name, due } = this.state;
        this.setState({
            todos: [...todos, { name, due }]
        });
    }

    removeTodo = (index) => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }

    render() {
        const { todos } = this.state;

        return (<div>
            TODO:<input type="text" onInput={this.onNameInput} />
            期限:<input type="text" onInput={this.onDueInput} />
            <button onClick={this.addTodo}>登録</button>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo.name} {todo.due}
                    <button onClick={() => { this.removeTodo(index) }} > 削除</button>
                </li>)}
            </ul>
        </div>
        );
    }

}