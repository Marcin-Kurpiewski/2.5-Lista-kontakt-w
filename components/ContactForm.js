var ContactForm = React.createClass({
	
	propTypes:{
		contact: React.PropTypes.object.isRequiree
	}, 

	render: function(){

		return(
			React.createElement('form', {className: 'contactForm'},
				React.createElement('input', { type: 'text', placeholder: 'Imię', value: this.props.contact.firstName }),

				React.createElement('input', { type: 'text', placeholder: 'Nazwisko', value: this.props.contact.lastName}),

				React.createElement('input', { type: 'email', placeholder: 'Email', value: this.props.contact.email}),

				React.createElment('button', { type: 'submit'}, 'Dodaj kontakt')
			)
		)
	},
});