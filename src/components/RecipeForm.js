import React from 'react'
import StepAdder from './StepAdder'
import {addStep} from '../api/recipe'
import {addRecipe} from '../api/recipe'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'

const styles ={
	formContainer:{
		height: 1370,
		width: 1220,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'inline-block',
	},
	formProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 20,
		background: 'black',
		margin: '40px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)',
	},
	addPhoto:{
		background:'grey',
		height: 190,
		width: 190,
		borderRadius: 20,
		textAlign: 'center',
		fontSize: 20,
		lineHeight: '188px',
		float:'left'
	},
	addUrl:{
		width: 320,
		height: 60,
		float:'left'
	},
	recipeBy:{
		width: 480,
		height: 60,
	},
	recipeType:{
		width: 220,
		height: 50,
		display: 'block',
		margin: '10px 10px 10px 20px'
	},
	prepTimeTemp:{
		width: 120,
		height: 50,
	},
	degrees:{
		width: 60,
		height: 50
	},
	amount:{
		width: 90,
		height: 50
	},
	measurement:{
		width: 280,
		height: 50
	},
	saveRecipe:{
		width: 640,
		height: 60
	},
	infoHeader:{
		width: 660,
		border: '2px solid #009688',
		borderWidth: ' 0 0 2px 0',
		paddingBottom: 10,
		fontSize: 24,
		marginBottom: 10,
		color: 'red'
	},
	producesLabel:{
		marginLeft: 10,
		color: '#03A9F4'
	},
	radioButtons:{
		color: '#03A9F4'
	},
	directions:{
		width: 640,
		height: 150,
		borderRadius: 5
	},
	addStep:{
		width: 220,
		height: 50,
		display: 'block'
	}
}
class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    	name:'', by:'',photoUrl:'',type:'',prepTime:0,cookTime:0,cookTemp:0,servingAmount:0,servingType:'',public:true, order: 1, directions: ''
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
  	addStep = (e) => {
  		e.preventDefault()
		var order = 1		
		if(this.props.steps[this.props.steps.length-1].recipeId > this.props.recipes.length){
			order = (Number(this.props.steps[this.props.steps.length-1].order) + 1)
		}
		addStep(order, this.state.directions)
		
  	}
  	addRecipe = (e) => {
  		e.preventDefault()
  		addRecipe(this.state.name, this.state.by, this.state.photoUrl, this.state.type, this.state.prepTime, this.state.cookTime, this.state.cookTemp, this.state.servingAmount, this.state.servingType, this.state.public)
		this.setState({
			order : 0
		})
  	}
  render() {
    return (
      <div style={styles.formContainer}>
      	<div style={styles.formProper}>
      		<form><div style={styles.infoHeader}>Standard Recipe Information</div>
      			<img src={this.state.photoUrl} alt="ADD VISUAL" style={styles.addPhoto}/><input type="text" name="photoUrl" onChange={this.handleChange} style={styles.addUrl} placeholder="Add Url of an Image"></input>
      			<input type="text" style={styles.recipeBy} name="name" onChange={this.handleChange} placeholder="Recipe Name"></input>
      			<input type="text" style={styles.recipeBy} name="by" onChange={this.handleChange} placeholder="By"></input>
      			<div>
      				<input type="radio" name="public" onChange={this.handleChange} value={true}></input><span style={styles.radioButtons}>Unrestricted Access </span>
      				<input type="radio" name="public" onChange={this.handleChange} value={false}></input><span style={styles.radioButtons}>This User Access Only </span>
      			</div>
      			<select name="type" onChange={this.handleChange} style={styles.recipeType}>
				  <option value="">Recipe Type</option>
				  <option value="breakfast">Breakfast</option>
				  <option value="lunch">Lunch</option>
				  <option value="dinner">Dinner</option>
				  <option value="dessert">Dessert</option>
				</select>
				<div>
					<input type="text" name="prepTime" onChange={this.handleChange} style={styles.prepTimeTemp} placeholder="Prep Time"></input>
					<input type="text" name="cookTime" onChange={this.handleChange} style={styles.prepTimeTemp} placeholder="Cook Time"></input>
					<input type="text" name="cookTemp" onChange={this.handleChange} style={styles.prepTimeTemp} placeholder="Cook Temp"></input>
					<select style={styles.degrees}>
						<option value="f">F°</option>
						<option value="c">C°</option>
					</select>
				</div>
				<span style={styles.producesLabel}>Recipe produces</span><input type="text" name="servingAmount" onChange={this.handleChange} style={styles.amount} placeholder="Amount"></input>
      			<input type="text" name="servingType" onChange={this.handleChange} style={styles.measurement} placeholder="Unit of measurement to be applied to result"></input>
      			<StepAdder/>
      			<textarea onChange={this.handleChange} style={styles.directions} name="directions" defaultValue="Input procedure for this production phase."></textarea>
        		<button style={styles.addStep} onClick={this.addStep}>Add This Step</button>
      			<button style={styles.saveRecipe} onClick={this.addRecipe}>Input this Food Method</button>
      		</form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { steps : appState.steps, recipes: appState.recipes}
}

export default connect(mapStateToProps)(RecipeForm)