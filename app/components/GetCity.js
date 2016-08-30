import React, {Component} from 'react'


class GetCity extends Component {

	render() {
		return (
			<div style={getStyles(this.props)}>
		  		<InputField
		    		onUpdateCity={this.props.onUpdateCity}
		    		city={this.props.city}/>
		  		<Button
		    		onSubmitCity={this.props.onSubmitCity}>
		      		Get Weather
		  		</Button>
			</div>
		)
	}	
}

const Button = (props) => {
	return(
		<button type='button'
	  		style={{margin: 10}}
	  		className='btn btn-success'
	  		onClick={props.onSubmitCity}>
	   		{props.children}
		</button>
	)
}

const InputField = (props) => {
	return (
		<input
	  		className='form-control'
	  		onChange={props.onUpdateCity}
	  		placeholder='St. George, Utah'
	  		type='text'
	  		value={props.city} />
	)
}

const getStyles = (props) => {
	return ({
		display: 'flex',
		flexDirection: props.direction || 'column',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: 300,
		alignSelf: 'right'
	})
}

export default GetCity
