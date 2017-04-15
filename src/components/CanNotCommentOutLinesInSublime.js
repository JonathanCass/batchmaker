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