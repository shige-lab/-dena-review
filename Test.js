import { render } from "@testing-library/react";
import React, { useState } from "react";

  class TodoApp extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { items: [], text: '' };
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	render() {
		return (
			<div>
		  <h3>TODO</h3>
		  <TodoList items={this.state.items} />
		  <form onSubmit={this.handleSubmit}>
			<label htmlFor="new-todo">
			  What needs to be done?
			</label>
			<input
			  id="new-todo"
			  onChange={this.handleChange}
			  value={this.state.text}
			  />
			<button>
			  Add #{this.state.items.length + 1}
			</button>
		  </form>
		</div>
	  );
	}
	
	handleChange(e) {
		this.setState({ text: e.target.value });
	}
	
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.text.length === 0) {
			return;
		}
		const newItem = {
			text: this.state.text,
			id: Date.now()
		};
		this.setState(state => ({
			items: state.items.concat(newItem),
			text: ''
	  }));
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
		  {this.props.items.map(item => (
			  <li key={item.id}>{item.text}</li>
			  ))}
		</ul>
	  );
	}
}

	const [name, setName] = useState('');
	
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	const handleName = (event) => {
		console.log(event.target.value)
		setName(event.target.value)
	}

	// handleSubmit(e){
	// 		setName('');
	// }
	
	return (
		<>
			<form onSubmit={this.handleSubmit}>
			<input
			onChange ={(event) => handleName(event)}
			type={'text'}
			value={name}/>
			<button type='submit' >submit</button>
			</form>
			</>
			);
			
	// };
	
	//   export default TodoApp;
	export default TextInput;