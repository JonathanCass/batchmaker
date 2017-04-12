import React from 'react'

const styles={
	stepContainer:{
		color: 'white'
	}
}

class StepAdder extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.stepContainer}>
        <form>
        	<input type="text" placeholder="Amount"></input>
        	<select>
				<option value="">Unit</option>
				<option value="tsp">Tsp.</option>
				<option value="tbsp">Tbsp.</option>
				<option value="cup">Cup</option>
				<option value="pound">Pound</option>
				<option value="floz">fl oz</option>
				<option value="pint">Pint</option>
				<option value="quart">Quart</option>
				<option value="gallon">Gallon</option>
			</select>
			<input type="text" placeholder="Ingredient"></input>
			<button>+</button>
			<textarea placeholder="">Input procedure for this production phase. </textarea>
        	<button>Add This Step</button>
        </form>
      </div>
    )
  }
}

export default StepAdder