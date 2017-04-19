import React from 'react'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import data from '../../db.json'

const styles={
	gridContainer:{
		height: 1370,
		width: 1440,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'block',
		padding: '5px 240px 10px 460px'
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
		margin : " 0 0 20px 0",
		display: 'flex',
		justifyContent: 'space-between'
	},
	viewAll:{
		height:35,
		width: 120,
		position: 'relative',
		top: -5,
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
	},
	favoritesLabel:{
		color: '#FF5722',
		fontSize: 20,
		textAlign: 'center',
		marginTop: 10
	},
}
class AllRecipesGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    	popularArray: []   //each index will have recipe ids and  the index + 1 is how many favorited it
    }
  }
  componentWillMount(){
  	getData()
	this.displayFavorites()
  }
   displayFavorites = () => {
  	var newArray = []

  	for( let i=data.batchmaker.users.length ; i > 1; i--){
  		data.batchmaker.recipes.forEach(function(recipe) {
  			if(recipe.favoritedBy.length === i && recipe.public === "true" ){
  				newArray.push( [recipe.name , recipe.photoUrl, recipe.id, data.batchmaker.users[recipe.by].handle, i] ) // i is the number of favorties the item has
  			}
  		})
  	}
	this.setState({
		popularArray: newArray
	})
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
        	<div style={styles.catHeader}>Popular Methods<Link to="/PopularRecipes/"><button style={styles.viewAll}>View Page</button></Link></div>
			<div style={styles.row}>
				{this.state.popularArray.map((recipe, i)=>(
					<Link to={'/RecipeView/' + recipe[2]} key={Math.random()} style={  styles.linkRow }>
        				<div style={styles.recipeAndName}>
							<div style={styles.favoritesLabel} >{recipe[4]} favorites</div>
        					<img src={recipe[1]} style={styles.recipe} alt=""/>
        				</div>
        			</Link>
	        	))}
        	</div>
			<div style={styles.catHeader}>{this.props.recipes[0] && this.props.users[this.props.user].handle}'s Favorites</div>
        	<div style={styles.row}>
				{this.props.recipes.map(recipe=>(
					this.props.users[this.props.user].favorites.map(favorite=>( 
						<Link to={'/RecipeView/' + recipe.id} key={'recipe' + recipe.id + Math.random()} style={ recipe.id === favorite  ? styles.linkRow : styles.displayNone }>
		        			<div style={styles.recipeAndName}>
		        				<img src={recipe.photoUrl} style={styles.recipe} alt=""/><div style={styles.recipeName}>{recipe.name}</div>
		        			</div>
		        		</Link>	
		        	))
        		))}        	
        	</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, user: appState.user, users: appState.users}
}

export default connect(mapStateToProps)(AllRecipesGrid)