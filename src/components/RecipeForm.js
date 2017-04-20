import React from 'react'
import StepAdder from './StepAdder'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'

const styles ={
	formContainer:{
		height: 1370,
		width: 1440,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'block',
		padding: '5px 240px 10px 460px'
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
		overflow: 'scroll'
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
	recipeName:{
		width: 480,
		height: 60,
	},
	recipeType:{
		width: 220,
		height: 50,
		display: 'block',
		margin: '10px 10px 40px 20px'
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
		borderRadius: 5,
		marginTop: 40
	},
	addStep:{
		width: 220,
		height: 50,
		display: 'block',
		float: 'right',
		position: 'relative',
		top: -10
	},
	user:{
		width: 640,
		heigt: 150,
		margin: ' 0 0 0 20px',
		fontSize: 26,
		color: '#03A9F4'
	},
	userName:{
		color:'#FF5722'
	},
	addImageLabel:{
		color: '#03A9F4',
		margin: '10px 0 0 10px',
		position: 'relative',
		top: 100
	},
	addNameLabel:{
		color: '#03A9F4',
		margin: '10px 0 0 10px',
		position: 'relative',
		top: 196,
		right: 156	
	},
	addTimesLabel:{
		color: '#03A9F4',
		position: 'relative',
		right: 40,
		marginLeft: 50,
		fontSize: 17
	},
	addAmountLabel:{
		color: '#03A9F4',
		marginLeft: 10,
		fontSize: 17
	},
	addIngredientLabel:{
		color: '#03A9F4',
		marginLeft: 138,
		fontSize: 17
	},
	addDirectionsLabel:{
		color: '#03A9F4',
		marginLeft: 10,
		fontSize: 17	
	}
}
class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    	name:'', handle: this.props.user, by: this.props.user ,photoUrl: "" ,order: 1, type:'',prepTime:0,cookTime:0,cookTemp:0,servingAmount:0,servingType:'',public: "true", directions: '',recipeObject: {}, stepArray:[],ingredientIdIndex: this.props.allocations.length +1, stepIdIndex: this.props.steps.length + 1, recipeIdIndex: this.props.recipes.length + 1, confirmButton: false
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
		var stepObj = {
      		"id": this.state.stepIdIndex,
      		"order": this.state.order,
     	 	"recipeId": this.state.recipeIdIndex,
    	  	"directions": this.state.directions  
		}
		
		this.setState({
			stepArray : [...this.state.stepArray, stepObj],
        	stepIdIndex : this.state.stepIdIndex + 1,
        	order: this.state.order + 1,
        	directions: ''
        })
		
  	}
  	addRecipe = (e) => {
  		e.preventDefault()
  		if(this.state.type === "" || this.state.servingAmount === "" || this.state.servingType === "" || isNaN(this.state.servingAmount) === true || Number(this.state.servingAmount) === 0 ){
  			alert("Invalid input. Empty strings and zeros are not allowed. Must result in a NUMBER of some thing. Must select meal type.")
  		}else{
	  		var recipeObj = {
	  			"id": this.state.recipeIdIndex,
			    "name": this.state.name,
			    "by": this.state.by,
			    "photoUrl": this.state.photoUrl,
			    "type": this.state.type,
			    "prepTime": this.state.prepTime,
			    "cookTime": this.state.cookTime,
		    	"cookTemp": this.state.cookTemp,
			    "servingAmount": this.state.servingAmount,
			    "servingType": this.state.servingType,
			    "public": this.state.public,
			    "favoritedBy" : []
	  		}
	  		this.setState({
	  			recipeObject : recipeObj,
	  			confirmButton : true
	  		})
	  	}
  	}
  render() {
    return (
      <div style={styles.formContainer}>
      	<div style={styles.formProper}>
      		<form><div style={styles.infoHeader}>Standard Recipe Information</div>
      		<div style={styles.user}>Logged In As <span style={styles.userName}> {this.props.users[this.props.user].handle} </span></div>
      			<img src={this.state.photoUrl} alt="ADD VISUAL" style={styles.addPhoto}/><span style={styles.addImageLabel}>Add Url of image</span><span style={styles.addNameLabel}>Input Name of Recipe</span><input type="text" name="photoUrl" onChange={this.handleChange} style={styles.addUrl}></input>
      			<input type="text" style={styles.recipeName} name="name" onChange={this.handleChange}></input>
      			<div>
      				<input type="radio" name="public" onChange={this.handleChange} value={"true"}></input><span style={styles.radioButtons}>Unrestricted Access </span>
      				<input type="radio" name="public" onChange={this.handleChange} value={"false"}></input><span style={styles.radioButtons}>This User Access Only </span>
      			</div>
      			<select name="type" onChange={this.handleChange} style={styles.recipeType}>
				  <option value="">Recipe Type</option>
				  <option value="breakfast">Breakfast</option>
				  <option value="lunch">Lunch</option>
				  <option value="dinner">Dinner</option>
				  <option value="dessert">Dessert</option>
				</select>
				<span style={styles.addTimesLabel}>PrepTime</span><span style={styles.addTimesLabel}>CookTime</span><span style={styles.addTimesLabel}>CookTemp</span>
				<div>
					<input type="text" name="prepTime" onChange={this.handleChange} style={styles.prepTimeTemp} value={this.state.prepTime}></input>
					<input type="text" name="cookTime" onChange={this.handleChange} style={styles.prepTimeTemp} value={this.state.cookTime}></input>
					<input type="text" name="cookTemp" onChange={this.handleChange} style={styles.prepTimeTemp} value={this.state.cookTemp}></input>
					<select style={styles.degrees}>
						<option value="f">F°</option>
						<option value="c">C°</option>
					</select>
				</div>
				<span style={styles.producesLabel}>Results In</span><input type="text" name="servingAmount" onChange={this.handleChange} style={styles.amount} value={this.state.servingAmount} ></input>
      			<input type="text" name="servingType" onChange={this.handleChange} style={styles.measurement} placeholder="Serving Type"></input>
      			<StepAdder recipeObject={this.state.recipeObject} stepArray={this.state.stepArray} confirmButton={this.state.confirmButton} recipeIdIndex={this.state.recipeIdIndex} ingredientIdIndex={this.state.ingredientIdIndex} stepIdIndex={this.state.stepIdIndex} order={this.state.order}/>
      			<span style={styles.addAmountLabel}>Amount</span><span style={styles.addIngredientLabel}>Ingredient</span>
      			<textarea onChange={this.handleChange} style={styles.directions} name="directions" value={this.state.directions}></textarea>
        		<span style={styles.addDirectionsLabel}>Input procedure for thie production phase</span>
        		<button style={styles.addStep} onClick={this.addStep}>Add This Step</button>
      			<button style={styles.saveRecipe} onClick={this.addRecipe}>Input this Food Method</button>
      		</form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { steps : appState.steps, recipes: appState.recipes, users: appState.users, user: appState.user, allocations: appState.allocations}
}

export default connect(mapStateToProps)(RecipeForm)