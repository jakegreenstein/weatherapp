import React, { Component } from 'react'
import GetCity from '../components/GetCity'
import { getCurrentWeather } from '../helpers/api'

class GetCityContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			city: ''
		}
		this.handleUpdateCity = this.handleUpdateCity.bind(this)
		this.handleSubmitCity = this.handleSubmitCity.bind(this)
	}

	handleSubmitCity(e) {
		e.preventDefault()
	    console.log(this.state.city)
	    this.context.router.push('/forecast/' + this.state.city)
	}

	handleUpdateCity(e) {
		console.log('handleUpdateCity')
		this.setState({
			city: e.target.value
		})
	}

	render() {
		return (
			<GetCity 
				direction={this.props.direction}
				onSubmitCity={this.handleSubmitCity}
				onUpdateCity={this.handleUpdateCity}
				city={this.state.city}/>
		);
	}
}

GetCityContainer.defaultProps = {
	direction: 'column'
}

GetCityContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}


export default GetCityContainer
