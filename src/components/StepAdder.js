import React from 'react'
//import {addIngredient} from '../api/recipe'
import data from '../../db.json'
//import axios from 'axios'

const styles={
	stepContainer:{
		color: 'white',
	},
	amount:{
		width: 80,
		height: 50
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
		const dataObj = {
			"id" : data.allocations.length + 1,
			"recipeId" : data.recipes.length + 1,
			"stepId": data.steps.length + 1,
			"numberOf": this.state.numberOf,
			"unitOf" : this.state.unitOf,
			"what" : this.state.what
		}
		data.allocations.push(dataObj)
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