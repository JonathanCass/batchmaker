import React from 'react'

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
        	<h1>BATCH CONSTRUCTOR</h1>
        </div>
        <div style={styles.headerRight}>
        	<i style={styles.icon} className="material-icons">note_add</i>
        	<i style={styles.icon} className="material-icons">settings</i>
        	<i style={styles.icon} className="material-icons">face</i>
        </div>
      </div>
    )
  }
}

export default Header