export default  class IssueAdd extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		let form = document.forms.issueAdd;
		this.props.createIssue({
			owner: form.owner.value,
			title: form.title.value,
			status: 'New',
			created: new Date(),
		});
		form.owner.value = "";
		form.title.value = "";
	}

	render() {
		return <div>
			<form name='issueAdd' onSubmit={this.handleSubmit}>
				<input type='text' name='owner' placeholder='owner'></input>
				<input type='text' name='title' placeholder='title'></input>
				<button type='submit'>Add</button>
			</form>
		</div>
	}
}
