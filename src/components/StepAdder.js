import React from 'react'

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
	directions:{
		width: 640,
		height: 150,
		borderRadius: 5
	},
	addStep:{
		width: 220,
		height: 50
	}
}

class StepAdder extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.stepContainer}>
        	<input type="text" style={styles.amount} placeholder="Amount"></input>
        	<select style={styles.unit}>
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
			<input type="text" style={styles.ingredient} placeholder="Ingredient"></input>
			<button style={styles.addIngredient}>+</button>
			<textarea style={styles.directions} defaultValue="Input procedure for this production phase."></textarea>
        	<button style={styles.addStep}>Add This Step</button>
      </div>
    )
  }
}

export default StepAdder