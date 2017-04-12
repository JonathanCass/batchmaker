import React from 'react'
import StepAdder from './StepAdder'
const styles ={
	formContainer:{
		height: 1756,
		width: 1220,
		display: 'inline-block',
	},
	formProper:{
		color: 'white',
		width: 700,
		height: 1000,
		//background: '#006064',
		background: 'linear-gradient( #006659, #004D40)',
		margin: '70px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(156,39,176,1)'
	},
	addPhoto:{
		background:'pink',
		height: 190,
		width: 190,
		borderRadius: 20
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
      		<form>Standard Recipe Information
      			<img src="" alt="" style={styles.addPhoto}/>
      			<input type="text" placeholder="Recipe Name"></input>
      			<input type="text" placeholder="By"></input>
      			<input type="radio" name="access" value="public"></input>Unrestricted Access
      			<input type="radio" name="access" value="private"></input>This User Access Only
      			<select>
				  <option value="">Recipe Type</option>
				  <option value="breakfast">Breakfast</option>
				  <option value="lunch">Lunch</option>
				  <option value="dinner">Dinner</option>
				  <option value="dessert">Dessert</option>
				</select>
				<input type="text" placeholder="Prep Time"></input>
				<input type="text" placeholder="Cook Time"></input>
				<input type="text" placeholder="Cook Temp"></input>
				<select>
					<option value="f">F°</option>
					<option value="c">C°</option>
				</select>
				Recipe execution results in <input type="text" placeholder="Amount"></input>
      			<input type="text" placeholder="Unit of measurement to be applied to result"></input>
      		<StepAdder/>
      		</form>
        </div>
      </div>
    )
  }
}

export default RecipeForm