import React from 'react'
import {Link} from 'react-router-dom'

const styles = {
  headerContainer:{
  	width: 1440,
  	height: 64,
  	display: 'flex',
  	justifyContent: 'space-between',
  	background: 'linear-gradient( #78909C, black)'
  },
  headerRight:{
  	display:'flex',
  	justifyContent: 'flex-end',
  	width: 300
  },
  icon:{
  	lineHeight: '64px',
  	fontSize: 35,
  	marginRight: 35,
  	color: '#d50000'
  },
  headerIntro:{
  	color:'#D50000',
  	fontSize: 22,
  	lineHeight: '74px',
  	width: 390,
  	paddingLeft: 15
  },
  title:{
    textDecoration: 'none',
    color: '#FAFAFA',
  }
}

class Header extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.headerContainer}>
        <div style={styles.headerLeft}>
        	<div style={styles.headerIntro}> Begin food production, organic.</div>
        </div>
        <div style={styles.appTitle}>
        	<Link to="/AllRecipesGrid/" style={styles.title}><h1 >BATCH CONSTRUCTOR</h1></Link>
        </div>
        <div style={styles.headerRight}>
        	<Link to="/RecipeForm/" ><i style={styles.icon} className="material-icons">note_add</i></Link>
        	<i style={styles.icon} className="material-icons">settings</i>
        	<Link to="/User/"><i style={styles.icon} className="material-icons">face</i></Link>
        </div>
      </div>
    )
  }
}

export default Header