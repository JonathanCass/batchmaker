import React from 'react'
import {addRecipe} from '../api/recipe'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

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
	unitDisplay:{
		width: 110,
		height: 50,
		margin: '10px 10px 10px -10px'
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
	},
	confirmButton:{
		width: 640,
		height: 220,
		position: 'relative',
		background: 'red',
		color: 'white',
		fontSize: 30,
		display: 'block',

	}
}

class StepAdder extends React.Component {
  	constructor(props) {
    	super(props)
    	this.state={
    		numberOf:0, unitOf:'',what:'',directions:'',ingredientArray:[], ingredientIdIndex: this.props.ingredientIdIndex
    	}
  	}
  	componentWillMount(){
  	getData()
  }
  	handleChange = (e) => {
        this.setState({
        	[e.target.name] : e.target.value
        })
  	}
  	addIngredient = (e) => {
  		e.preventDefault()
  		if(Number(this.state.numberOf) === 0 || this.state.what === "" || isNaN(this.state.numberOf) === true || this.state.numberOf === "" ){
  			alert("Can not submit an ingredient with a zero amount, a string for amount,  or without a name.")
  		}else{
	  		var ingredientObj = {
	      		"id": this.state.ingredientIdIndex,
	      		"recipeId": this.props.recipeIdIndex,
	     		"stepId": this.props.stepIdIndex,
	     		"numberOf": this.state.numberOf,
	     		"unitOf": this.state.unitOf,
	     		"what": this.state.what  
			}
			this.setState({
				ingredientArray : [...this.state.ingredientArray, ingredientObj],
	        	ingredientIdIndex : this.state.ingredientIdIndex + 1,
	        	numberOf:0,
	        	unitOf:'',
	        	what:''
	        })
	     }
  	}
  	removeIngredient = (e) => {
  		e.preventDefault()
  		var newArray = this.state.ingredientArray
  		newArray.splice(e.target.value,1)
  		this.setState({
  			ingredientArray : newArray
  		})
  	}
  	addRecipe = (e) => {
  		e.preventDefault()
  		addRecipe(this.props.recipeObject, this.props.stepArray, this.state.ingredientArray)
    	this.props.history.push('/RecipeAddedScreen/')
  	}
  render() {
    return (	
      	<div style={styles.stepContainer}>
      		{this.state.ingredientArray.map(item=>(
      			<div key={'allocation'+item.id} style={Number(item.recipeId) === Number(this.props.recipes.length + 1) && this.props.stepIdIndex === item.stepId ? styles.stepDisplay : styles.displayNone }>
      				<input style={styles.amount} value={item.numberOf} readOnly></input>
	      			<input style={styles.unitDisplay} value={item.unitOf} readOnly></input>
	      			<input style={styles.ingredient} value={item.what} readOnly></input>
	      			<button value={this.state.ingedientIdIndex} onClick={this.removeIngredient} style={styles.addIngredient}>-</button>
	      		</div>
	    	))}
        	<input type="text" onChange={this.handleChange} name="numberOf" style={styles.amount} value={this.state.numberOf}></input>
        	<select onChange={this.handleChange} name="unitOf" style={styles.unit}>
				<option value="">Unit</option>
				<option value="tsp">Tsp</option>
				<option value="tbsp">Tbsp</option>
				<option value="cups">Cup</option>
				<option value="pounds">Pound</option>
				<option value="floz">fl oz</option>
				<option value="pints">Pint</option>
				<option value="quarts">Quart</option>
				<option value="gallon">Gallon</option>
				<option value="">unitless</option>
			</select>
			<input type="text" onChange={this.handleChange} name="what" style={styles.ingredient} value={this.state.what}></input>
			<button onClick={this.addIngredient} style={styles.addIngredient}>+</button>
			<button onClick={this.addRecipe} style={this.props.confirmButton === true ? styles.confirmButton : styles.displayNone  }>Confirm Recipe</button>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, allocations: appState.allocations}
}

export default connect(mapStateToProps)(withRouter(StepAdder))