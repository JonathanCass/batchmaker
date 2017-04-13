import React from 'react'

const styles ={
	recipeContainer:{
		height: 1370,
		width: 1220,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'inline-block',
	},
	recipeProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 30,
		background: 'black',
		margin: '70px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)'
	},
	recipteTitle:{
		width: 640,
		height: 50,
		textAlign: 'center',
		fontSize: 40,
		color: '#03A9F4'
	},
	recipeBy:{
		width: 640,
		height: 10,
		fontSize: 20,
		color: '#FF5722',
		textAlign: 'center'
	},
	recipeImage:{
		margin: '25px 0',
		width: 640,
		height: 400,
		background: 'grey',
		borderRadius: 20
	},
	typeTimeTemp:{
		width: 160,
		height: 90,
		borderRadius: 5,
		border: 'solid 2px white',
		display: 'inline-block',
		paddingLeft: 20,
		verticalAlign: 'text-bottom'
	},
	boxLabel:{
		height: 40,
		fontSize: 16,
		lineHeight: '60px',
		color: '#03A9F4'
			
	},
	boxValue:{
		height: 50,
		fontSize: 20,
		color: '#FF5722',
		lineHeight: '30px'
	},
	ingredientBox:{
		width: 640,
		height: 362,
		border: 'solid 2px white',
		borderRadius: 5
	},
	adjustLine:{
		width: 638,
		height: 60,
		border: 'solid 2px white',
		borderWidth: ' 0 0 2px 0',
		lineHeight: '58px',
		fontSize: 20,
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: 20
	},
	ingredientLine:{
		width: 638,
		height: 60,
		display: 'flex',
		justifyContent: 'space-between'
	},
	amount:{
		width: 160,
		height: 60,
		border: 'solid 2px white',
		borderWidth: ' 0 2px 0 0',
		textAlign: 'right',
		display:'inline-block',
		color: '#03A9F4'
	},
	ingredient:{
		width: 480,
		height: 60,
		display:'inline-block',
		color: '#FF5722',
	},
	adjustButton:{
		width: 120,
		height: 40,
	}
}

class RecipeView extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.recipeContainer}>
        <div style={styles.recipeProper}>
        	<div style={styles.recipteTitle}>recipe.title</div>
        	<div style={styles.recipeBy}>recipe.by</div>
        	<img style={styles.recipeImage} src="" alt=""/>
        	
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Recipe Type</div><div style={styles.boxValue}>recipe.type</div>
        	</div>
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Prep Time</div><div style={styles.boxValue}>recipe.prepTime</div>
        	</div>
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Cook Time</div><div style={styles.boxValue}>recipe.cookTime</div>
        	</div>
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Cook Temp</div><div style={styles.boxValue}>recipe.cookTemp</div>
        	</div>

        	<div style={styles.ingredientBox}>
        		<div style={styles.adjustLine}>recipe.servingAmount recipe.servingType<button style={styles.adjustButton}>Adjust</button></div>
        		<div style={styles.ingredientLine}>
        			<div style={styles.amount}>allocations.numberOf allocations.unitOf</div>
        			<div style={styles.ingredient}>allocations.what</div>
        		</div>
        		<div style={styles.ingredientLine}>
        			<div style={styles.amount}>allocations.numberOf allocations.unitOf</div>
        			<div style={styles.ingredient}>allocations.what</div>
        		</div>
        		<div style={styles.ingredientLine}>
        			<div style={styles.amount}>allocations.numberOf allocations.unitOf</div>
        			<div style={styles.ingredient}>allocations.what</div>
        		</div>
        		<div style={styles.ingredientLine}>
        			<div style={styles.amount}>allocations.numberOf allocations.unitOf</div>
        			<div style={styles.ingredient}>allocations.what</div>
        		</div>
        		<div style={styles.ingredientLine}>
        			<div style={styles.amount}>allocations.numberOf allocations.unitOf</div>
        			<div style={styles.ingredient}>allocations.what</div>
        		</div>
        	</div>
        </div>
      </div>
    )
  }
}

export default RecipeView