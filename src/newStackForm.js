var React = require('react');

var NewStackForm = React.createClass({
	getInitialState: function(){
		return {
			text: ''
		}
	},
	handleChange: function(e){
		this.setState({
			text: e.target.text
		});
	},
	handleSubmit: function(){
		this.props.stacksStore.push({
			stack: [
				"#2A363B",
				"#E84A5F",
				"#FF847C",
				"#FECEA8",
				"#99B898"
			]
		});
		this.setState({ text: '' });
	},
	render: function() {
		return (
			<div className="newColorStack form-group">
				<label>test</label>
				<div className="input-group">
					<span className="input-group-addon">#</span>
					<input
						type="text"
						value={this.state.text}
						onChange={this.handleChange}
						className="form-control"
					/>
				</div>
			</div>
		);
	}

});

module.exports = NewStackForm;