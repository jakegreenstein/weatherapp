import React, { Component } from 'react'
import Forecast from '../components/Forecast'
import { getForecast } from '../helpers/api'

class ForecastContainer extends Component {

	constructor(props){
		super(props)
		this.state = {
			isLoading: true,
			forecastData: {}
		}
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		this.makeRequest(this.props.routeParams.city)
	}

	componentWillReceiveProps(nextProps) {
		this.makeRequest(nextProps.routeParams.city)
	}

	makeRequest(city) {
		getForecast(city)
			.then(function(forecastData){
				this.setState({
					isLoading: false,
					forecastData: forecastData
				})
			}.bind(this))
	}
	handleClick(weather) {
		this.context.router.push({
	      	pathname: '/detail/' + this.props.routeParams.city,
	      	state: {
	        	weather: weather
	      	}
	    })
	}
	render() {
		return (
			<Forecast 
				city={this.props.routeParams.city}
				isLoading={this.state.isLoading}
				forecastData={this.state.forecastData} 
				handleClick = {this.handleClick} />
		)
	}
}

ForecastContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ForecastContainer