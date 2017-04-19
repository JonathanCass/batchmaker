import React from 'react'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'
import data from '../../db.json'
import {Link} from 'react-router-dom'

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
		borderWidth: ' 0 0 2px 0',
		paddingBottom: 10,
		fontSize: 24,
		margin : " 10px 0 20px 0",
	},
	catHeader2:{
		width: 635,
		height: 50,
		lineHeight: '50px',
		border: '2px solid #009688',
		borderWidth: ' 0 0 2px 0',
		paddingBottom: 10,
		fontSize: 26,
		margin : " 10px 0 20px 0",
		display: 'block ',
		color: '#FF4D0F',
	},
	row:{
		width: 650,
		height: 170,
		marginBottom: 50
	},
	recipeAndName:{
		borderRadius: 5,
		width: 150,
		height: 160,
		display: 'inline-block',
		marginRight: 12,
		marginBottom: 60
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
		fontSize: 18,
		width: 150,
		height: 10,
		color: '#03A9F4'
	},
	line:{
		color: '#D50000',
		fontSize: 24,
		marginTop: 30
	},
	displayNone:{
		display: 'none'
	},
	linkRow:{
		width: 650,
		height: 200,
		marginBottom: 60,
		display: 'block'
	}
}

class PopularRecipes extends React.Component {
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

  	for( let i=data.batchmaker.users.length ; i > 0; i--){
  		data.batchmaker.recipes.forEach(function(recipe) {
  			if(recipe.favoritedBy.length === i && recipe.public === "true"){
  				newArray[i] = [recipe.name , recipe.photoUrl, recipe.id, data.batchmaker.users[recipe.by].handle] // i is the number of favorties the item has
  			}
  		})
  	}
	this.setState({
		popularArray: newArray
	})
  }
  render() {
	  console.log(this.state.popularArray)
    return (
      <div style={styles.gridContainer}>
        <div style={styles.gridProper}>
        	<div style={styles.catHeader}>Popular Methods</div>
        	<div style={styles.row}>
				{this.state.popularArray.map((recipe, i)=>(
					<Link to={'/RecipeView/' + recipe[2]} key={Math.random()} style={ recipe !== undefined  ? styles.linkRow : styles.displayNone }>
        				<div style={styles.recipeAndName}>
							<div style={styles.catHeader2} >{i} favorites</div>
        					<img src={recipe[1]} style={styles.recipe} alt=""/><div style={styles.recipeName}>{recipe[0]}</div>
        				</div>
        			</Link>
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

export default connect(mapStateToProps)(PopularRecipes)