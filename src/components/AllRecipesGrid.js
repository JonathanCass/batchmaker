import React from 'react'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const styles={
	gridContainer:{
		height: 1370,
		width: 1220,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'inline-block',
	},
	gridProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 30,
		background: 'black',
		margin: '40px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)'
	},
	catHeader:{
		width: 635,
		height: 50,
		lineHeight: '50px',
		border: '2px solid #009688',
		borderWidth: ' 2px 0 2px 0',
		paddingBottom: 10,
		fontSize: 24,
		margin : " 10px 0 20px 0",
		display: 'flex',
		justifyContent: 'space-between'
	},
	viewAll:{
		height:40,
		width: 60,
		position: 'relative',
		top: -7,
		background: '#D50000',
		color: 'white'
	},
	row:{
		width: 650,
		height: 178,
		marginBottom: 50,
		overflow: 'hidden'
	},
	recipeAndName:{
		borderRadius: 5,
		width: 150,
		height: 160,
		display: 'inline-block',
		marginRight: 12,
	},
	recipe:{
		borderRadius: 5,
		width: 150,
		height: 150,
		margin: 0
	},
	recipeName:{
		paddingTop: 10,
		textAlign: 'center',
		fontSize: 14,
		width: 150,
		height: 10,
		color: 'white'
	},
	displayNone:{
		display: 'none'
	},
	linkRow:{
		color:'white'
	}
}
class AllRecipesGrid extends React.Component {
  /*constructor(props) {
    super(props)
  }*/
  componentWillMount(){
  	getData()
  }
  render() {
    return (
      <div style={styles.gridContainer}>
        <div style={styles.gridProper}>
        	<div style={styles.catHeader}> {this.props.recipes[0] && this.props.users[this.props.user].handle}'s Methods<Link to="/UsersRecipes/"><button style={styles.viewAll}>View All</button></Link></div>
        	<div style={styles.row}>
				{this.props.recipes.map(recipe=>(
        			<Link to={'/RecipeView/' + recipe.id} key={'recipe' + recipe.id} style={ Number(recipe.by) === Number(this.props.user) ? styles.linkRow : styles.displayNone }>
        				<div style={styles.recipeAndName}>
        					<img src={recipe.photoUrl} style={styles.recipe} alt=""/><div style={styles.recipeName}>{recipe.name}</div>
        				</div>
        			</Link>
        		))}        	
        	</div>
        	<div style={styles.catHeader}>Open Source Methods<Link to="/PublicRecipes/"><button style={styles.viewAll}>View All</button></Link></div>
        	<div style={styles.row}>
        		{this.props.recipes.map(recipe=>(
        			<Link to={'/RecipeView/' + recipe.id} key={'recipe' + recipe.id}>
	        			<div style={styles.recipeAndName}>
	        				<img src={recipe.photoUrl} style={styles.recipe} alt=""/><div style={styles.recipeName}>{recipe.name}</div>
	        			</div>
	        		</Link>	
        		))}
        	</div>
        	<div style={styles.catHeader}>Popular Methods<Link to="/PopularRecipes/"><button style={styles.viewAll}>View All</button></Link></div>
        	<div style={styles.row}>
				{this.props.recipes.map(recipe=>(
					<Link to={'/RecipeView/' + recipe.id} key={'recipe' + recipe.id}>
	        			<div style={styles.recipeAndName}>
	        				<img src={recipe.photoUrl} style={styles.recipe} alt=""/><div style={styles.recipeName}>{recipe.name}</div>
	        			</div>
	        		</Link>	
        		))}        	
        	</div>
        	<div style={styles.catHeader}>{this.props.recipes[0] && this.props.users[this.props.user].handle}'s Favorite Methods<Link to="/PublicRecipes/"><button style={styles.viewAll}>View All</button></Link></div>
        	<div style={styles.row}>
				{this.props.recipes.map(recipe=>(
					<Link to={'/RecipeView/' + recipe.id} key={'recipe' + recipe.id}>
	        			<div style={styles.recipeAndName}>
	        				<img src={recipe.photoUrl} style={styles.recipe} alt=""/><div style={styles.recipeName}>{recipe.name}</div>
	        			</div>
	        		</Link>	
        		))}        	</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, user: appState.user, users: appState.users}
}

export default connect(mapStateToProps)(AllRecipesGrid)