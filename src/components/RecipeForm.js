import React from 'react'
import StepAdder from './StepAdder'
const styles ={
	formContainer:{
		height: 1370,
		width: 1220,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		//background: '#FF9100',
		display: 'inline-block',
	},
	formProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 20,
		background: 'black',
		margin: '70px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)'
	},
	addPhoto:{
		background:'#D50000',
		height: 190,
		width: 190,
		borderRadius: 20,
		textAlign: 'center',
		fontSize: 20,
		lineHeight: '188px',
	},
	recipeBy:{
		width: 480,
		height: 60,
	},
	recipeType:{
		width: 220,
		height: 50,
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
		width: 410,
		height: 50
	},
	saveRecipe:{
		width: 250,
		height: 60
	},
	infoHeader:{
		width: 660,
		border: '2px solid #009688',
		borderWidth: ' 0 0 2px 0',
		paddingBottom: 10,
		fontSize: 24,
		marginBottom: 10
	}
}
class RecipeForm extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.formContainer}>
      	<div style={styles.formProper}>
      		<form><div style={styles.infoHeader}>Standard Recipe Information</div>
      			<img src="" alt="ADD VISUAL" style={styles.addPhoto}/>
      			<input type="text" style={styles.recipeBy} placeholder="Recipe Name"></input>
      			<input type="text" style={styles.recipeBy} placeholder="By"></input>
      			<input type="radio" name="access" value="public"></input>Unrestricted Access
      			<input type="radio" name="access" value="private"></input>This User Access Only
      			<select style={styles.recipeType}>
				  <option value="">Recipe Type</option>
				  <option value="breakfast">Breakfast</option>
				  <option value="lunch">Lunch</option>
				  <option value="dinner">Dinner</option>
				  <option value="dessert">Dessert</option>
				</select>
				<input type="text" style={styles.prepTimeTemp} placeholder="Prep Time"></input>
				<input type="text" style={styles.prepTimeTemp} placeholder="Cook Time"></input>
				<input type="text" style={styles.prepTimeTemp} placeholder="Cook Temp"></input>
				<select style={styles.degrees}>
					<option value="f">F°</option>
					<option value="c">C°</option>
				</select>
				Recipe execution results in <input type="text" style={styles.amount} placeholder="Amount"></input>
      			<input type="text" style={styles.measurement} placeholder="Unit of measurement to be applied to result"></input>
      			<StepAdder/>
      			<button style={styles.saveRecipe}>Input this Food Method</button>
      		</form>
        </div>
      </div>
    )
  }
}

export default RecipeForm