import React from 'react'
import {addIngredient} from '../api/recipe'

const styles={
	stepContainer:{
		color: 'white',
	},
	amount:{
		width: 80,
		height: 50,
	},
	unit:{
		width: 110,
		height: 50
	},
	ingredient:{
		width: 350,
		height: 50
	},
	addIngredient:{
		width: 60,
		height: 50
	},
	stepDisplay:{
		disply: 'flex'
	},
	displayNone:{
		display: 'none'
	}
}

class StepAdder extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state={
    		numberOf:0, unitOf:'',what:'',directions:''
    	}
  	}
  	handleChange = (e) => {
        this.setState({
        	[e.target.name] : e.target.value
        })
  	}
  	addIngredient = (e) => {
  		e.preventDefault()
  		addIngredient(this.state.numberOf, this.state.unitOf, this.state.what)
  	}
  render() {
    return (
      <div style={styles.stepContainer}>
        	<input type="text" onChange={this.handleChange} name="numberOf" style={styles.amount} placeholder="Amount"></input>
        	<select onChange={this.handleChange} name="unitOf" style={styles.unit}>
				<option value="">Unit</option>
				<option value="tsp">Tsp</option>
				<option value="tbsp">Tbsp</option>
				<option value="cup">Cup</option>
				<option value="pound">Pound</option>
				<option value="floz">fl oz</option>
				<option value="pint">Pint</option>
				<option value="quart">Quart</option>
				<option value="gallon">Gallon</option>
			</select>
			<input type="text" onChange={this.handleChange} name="what" style={styles.ingredient} placeholder="Ingredient"></input>
			<button onClick={this.addIngredient} style={styles.addIngredient}>+</button>
      </div>
    )
  }
}

export default StepAdder