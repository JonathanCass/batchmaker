{this.state.map(item=>(
      			<div style={item.steps.id === data.steps.length + 1 ? styles.displayNone : styles.stepDisplay}>
      				<input style={styles.amount} value={item.amount}></input>
	      			<select style={styles.unit} value={item.unitOf}></select>
	      			<input style={styles.ingredient} value={item.what}></input>
	      			<button style={styles.addIngredient}>-</button>
	      		</div>
	      	))}

axios.post('http://localhost:3001/db', {
    test : [ "array", "test"]
  })





export function addIngredient(ingInfo) {
	axios.post('http://localhost:3001/', {
		Test : "Fails"
		/*
		"recipeId" : data.recipes.length + 1,
		"stepId": data.steps.length + 1,
		"numberOf": ingInfo.numberOf,
		"unitOf" : ingInfo.unitOf,
		"what" : ingInfo.what*/
	})
}

export function addStep(stepInfo) {
	axios.post('http://localhost:3001/db/step', {

	})
}

export function addIngredient(numberOf, unitOf, what){
    axios.post('http://localhost:3001/ingredients',{
      "recipeId": data.recipes.length + 1,
      "stepId": data.steps.length + 1,
      "numberOf": numberOf,
      "unitOf": unitOf,
      "what": what
    })
}