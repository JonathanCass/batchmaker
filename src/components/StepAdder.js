import React from 'react'
import {addRecipe} from '../api/recipe'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'

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
    		numberOf:0, unitOf:'',what:'',directions:'',ingredientArray:[], stepIdIndex: this.props.stepIdIndex, ingredientIdIndex: this.props.ingredientIdIndex
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
  	addRecipe = (e) => {
  		e.preventDefault()
  		addRecipe(this.props.recipeObject, this.props.stepArray, this.state.ingredientArray)
  	}
  render() {
    return (	
      	<div style={styles.stepContainer}>
      		{this.state.ingredientArray.map(item=>(
      			<div key={'allocation'+item.id} style={Number(item.recipeId) === Number(this.props.recipes.length + 1) ? styles.stepDisplay : styles.displayNone }>
      				<input style={styles.amount} value={item.numberOf} readOnly></input>
	      			<input style={styles.unitDisplay} value={item.unitOf} readOnly></input>
	      			<input style={styles.ingredient} value={item.what} readOnly></input>
	      			<button style={styles.addIngredient}>-</button>
	      		</div>
	    	))}
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
			<button onClick={this.addRecipe} style={this.props.confirmButton === true ? styles.confirmButton : styles.displayNone  }>Confirm Recipe</button>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, allocations: appState.allocations}
}

export default connect(mapStateToProps)(StepAdder)