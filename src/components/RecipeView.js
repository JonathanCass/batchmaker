import React from 'react'
import Step from './Step'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'

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
		margin: '40px auto',
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
		margin: '30px 100px',
		width: 440,
		height: 300,
		background: 'grey',
		borderRadius: 20
	},
	typeTimeTemp:{
		width: 160,
		height: 90,
		borderRadius: 5,
		border: 'solid 2px white',
		display: 'inline-block',
		paddingLeft: 10,
		verticalAlign: 'text-bottom'
	},
	boxLabel:{
		height: 40,
		fontSize: 14,
		lineHeight: '60px',
		color: '#03A9F4'
			
	},
	boxValue:{
		height: 50,
		fontSize: 18,
		color: '#FF5722',
		lineHeight: '30px'
	},
	ingredientBox:{
		width: 640,
		height: 276,
		border: 'solid 2px white',
		borderRadius: 5,
	},
	adjustLine:{
		width: 636,
		height: 60,
		border: 'solid 2px white',
		borderWidth: ' 0 0 2px 0',
		lineHeight: '60px',
		fontSize: 24,
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: 10,
		borderRadius: 5,
		color: 'red'
	},
	mapBox:{
		width: 638,
		height: 212,
		overflow:'scroll',
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
		textAlign: 'right',
		display:'inline-block',
		color: '#03A9F4',
		lineHeight:'60px',
		border: 'solid 1px white',
		borderWidth: ' 0 1px 1px 0',
		paddingRight: 10
	},
	ingredient:{
		width: 480,
		height: 60,
		display:'inline-block',
		color: '#FF5722',
		lineHeight: '60px',
		border: 'solid 1px white',
		borderWidth: ' 0 0 1px 1px',
		paddingLeft: 10
	},
	adjustButton:{
		width: 120,
		height: 40,
		fontSize:20
	},
	editRecipe:{
		width: 160,
		height: 40,
		fontSize:20,
		float: 'right',
		margin: ' 20px 0 0 0 '
	},
	displayNone:{
		display: 'none'
	}
}

class RecipeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
    	id : Number(this.props.match.params.recipeId) - 1
    }
  }
  componentWillMount(){
  	getData()
  }
  render() {
    return (
      <div style={styles.recipeContainer}>
        <div style={styles.recipeProper}>
        	<div style={styles.recipteTitle}>{this.props.recipes[0] && this.props.recipes[this.state.id].name}</div>
        	<div style={styles.recipeBy}> by {this.props.recipes[0] && this.props.recipes[this.state.id].by}</div>
        	<img style={styles.recipeImage} src={this.props.recipes[0] && this.props.recipes[this.state.id].photoUrl} alt=""/>
        	
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Recipe Type</div><div style={styles.boxValue}>{this.props.recipes[0] && this.props.recipes[this.state.id].type}</div>
        	</div>
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Prep Time</div><div style={styles.boxValue}>{parseInt((this.props.recipes[0] && this.props.recipes[this.state.id].prepTime)/60) === 0 ? "" : parseInt((this.props.recipes[0] && this.props.recipes[this.state.id].prepTime)/60) + "Hrs"} {(this.props.recipes[0] && this.props.recipes[this.state.id].prepTime)%60}Mins</div>
        	</div>
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Cook Time</div><div style={styles.boxValue}>{parseInt((this.props.recipes[0] && this.props.recipes[this.state.id].cookTime)/60) === 0 ? "" : parseInt((this.props.recipes[0] && this.props.recipes[this.state.id].cookTime)/60) + "Hrs"} {(this.props.recipes[0] && this.props.recipes[this.state.id].cookTime)%60}Mins</div>
        	</div>
        	<div style={styles.typeTimeTemp}>
        		<div style={styles.boxLabel}>Cook Temp</div><div style={styles.boxValue}>{this.props.recipes[0] && this.props.recipes[this.state.id].cookTemp} °F</div>
        	</div>

        	<div style={styles.ingredientBox}>
        		<div style={styles.adjustLine}>
        			{this.props.recipes[0] && this.props.recipes[this.state.id].servingAmount + " "} {this.props.recipes[0] && this.props.recipes[this.state.id].servingType}<button style={styles.adjustButton}>Adjust</button>
        		</div>
        		<div style={styles.mapBox}>	
			        {this.props.allocations.map(allocation=>(
				        	<div key={'allocation' + allocation.id}style={Number(allocation.recipeId) === Number(this.props.match.params.recipeId) ? styles.ingredientLine : styles.displayNone}>
				        		<div style={styles.amount}>{allocation.numberOf} {allocation.unitOf}</div>
				        		<div style={styles.ingredient}>{allocation.what}</div>
				        	</div>
			        ))}
			    </div>
        	</div>
        	<Step recipeId={this.props.match.params.recipeId} />
        	<button style={styles.editRecipe}>Edit This Recipe</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, allocations: appState.allocations}
}

export default connect(mapStateToProps)(RecipeView)