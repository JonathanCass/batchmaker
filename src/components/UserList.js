import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const styles={
	listContainer:{
		height: 1370,
		width: 1440,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'block',
		padding: '5px 240px 10px 460px'
	},
	listProper:{
		color: 'black',
		width: 700,
		height: 1220,
		padding: 30,
		background: 'black',
		margin: '40px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)',
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'scroll'
	},
	avatar:{
		width: 200,
		height: 200,
		borderRadius: 25
	},
	userBox:{
		margin: '30px 0 10px 20px',
		background: 'white',
		padding: 20,
		borderRadius: 25,
		width: 300
	},
	bioText:{
		color: 'black',
		fontSize: 16,
		fontWeight: 'normal'
	},
	userHandle:{
		color: '#009688',
		fontWeight: 'bold',
		fontSize: 22
	},
	bioBlock:{
		color: '#D50000',
		fontWeight: 'bold',
		fontSize: 20
	},
	displayNone:{
		display: 'none'
	},
	recipeName:{
		color: 'white'
	},
	createdHeader:{
		margin: '10px 0 10px 0',
		color: '#FF5722'
	},
	recipeLink:{
		color: '#03A9F4',
		textDecoration: 'underline',
		fontWeight: 'bold'
	}
}

class UserList extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.listContainer}>
      	<div style={styles.listProper}>
      		{this.props.users.map(user=>(
      			<div key={Math.random()} style={styles.userBox}>
      				<div style={styles.userHandle}>{user.handle} </div>
      				<img src={user.avatarUrl} style={styles.avatar} alt={user.id} />
      				<div style={styles.bioBlock}>About {user.handle} : <span style={styles.bioText}> {user.bio} </span> </div>
							<div style={styles.createdHeader}>Created Recipe's</div>
							{this.props.recipes.map(recipe=>(
								<span key={Math.random()} style={recipe.by === user.id && recipe.public === "true" ?  styles.recipeName : styles.displayNone}> <Link to={'/RecipeView/' + recipe.id} style={styles.recipeLink}> {recipe.name}</Link> </span>
							))}
						</div>
      		))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, allocations: appState.allocations, users: appState.users, user: appState.user}
}

export default connect(mapStateToProps)(UserList)