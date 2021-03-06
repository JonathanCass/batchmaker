import React from 'react'
import {Link} from 'react-router-dom'
import {getData} from '../api/recipe'

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
      position: 'fixed',
      top: 300,
      left: 120,
      WebkitTextStroke : '3px black',
      color: '#D50000',

    },
    subTitle:{
      fontSize: 52,
      position: 'fixed',
      top: 400,
      left: 240,
      borderRadius: 10,
      color: 'white',
      WebkitTextStroke : '2px blue',
    }
}
class IntroPage extends React.Component {
  /*constructor(props) {
    super(props)
  }
  */
  componentWillMount(){
  	getData()
  }
  render() {
    return (
      <Link to="./AllRecipesGrid/" style={styles.introContainer} className="introPage">
        <div style={styles.title}> BATCH CONSTRUCTOR </div>
        <div style={styles.subTitle}> Click to Begin Cooking Operations</div>
      </Link>
    )
  }
}

export default IntroPage