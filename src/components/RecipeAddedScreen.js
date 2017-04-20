import React from 'react'
import {Link} from 'react-router-dom'
import {getData} from '../api/recipe'
import {connect} from 'react-redux'

const styles ={
    introContainer:{
        position: 'absolute',
        zIndex: 2,
        height: 1440,
        width: 1440,
        top: 0,
        left: 0,
    },
    title:{
      fontSize: 92,
      WebkitTextStroke : '3px black',
      color: '#D50000',
      position: 'fixed',
      left:325,
      top: 300
    },
    subTitle:{
      fontSize: 52,
      borderRadius: 10,
      color: 'white',
      WebkitTextStroke : '2px blue',
      position: 'fixed',
      top: 400,
      left: 520
    }
}
class RecipeAddedScreen extends React.Component {
  /*constructor(props) {
    super(props)
  }
  */
  componentWillMount(){
  	getData()
  }
  render() {
      console.log('this.props.recipes', this.props.recipes)
    return (
      <Link to={'/UsersRecipes/'} style={styles.introContainer} className="introPage">
        <div style={styles.title}> RECIPE ADDED </div>
        <div style={styles.subTitle}> Click to Continue</div>
      </Link>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, user: appState.user, users: appState.users}
}

export default connect(mapStateToProps)(RecipeAddedScreen)