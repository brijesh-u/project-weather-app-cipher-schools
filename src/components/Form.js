import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
				<span><h3 style={{color:"white"}}>Before Getting Weather, Please check City and Country </h3></span>
				<br/>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>

	</form>

	

	
);

export default Form;