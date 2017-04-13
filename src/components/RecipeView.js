import React from 'react'

const styles ={
	recipeContainer:{
		height: 1370,
		width: 1220,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		//background: '#FF9100',
		display: 'inline-block',
	},
	recipeProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 20,
		background: 'black',
		margin: '70px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)'
	},
}

class RecipeView extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.recipeContainer}>
        <div style={styles.recipeProper}>
        	RECIPE VIEW WEEEE
        </div>
      </div>
    )
  }
}

export default RecipeView