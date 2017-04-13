import React from 'react'

const styles={
	gridContainer:{
		height: 1370,
		width: 1220,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		//background: '#FF9100',
		display: 'inline-block',
	},
	gridProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: '50px 30px 30px 30px',
		background: 'black',
		margin: '70px auto',
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
		display: 'flex',
		justifyContent: 'space-between'
	},
	viewAll:{
		height:40,
		width: 60,
		position: 'relative',
		top: -10,
	},
	row:{
		width: 650,
		height: 170,
		padding:' 10px 0 ',
		marginBottom: '50'
	},
	recipe:{
		borderRadius: '5',
		width: 150,
		height: 150,
		marginRight: 12,
		background: 'grey',
		display: 'inline-block'
	}
}
class AllRecipesGrid extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.gridContainer}>
        <div style={styles.gridProper}>
        	<div style={styles.catHeader}>This User's Methods<button style={styles.viewAll}>View All</button></div>
        	<div style={styles.row}>
        		<div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div>
        	</div>
        	<div style={styles.catHeader}>Open Source Methods<button style={styles.viewAll}>View All</button></div>
        	<div style={styles.row}>
        		<div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div>
        	</div>
        	<div style={styles.catHeader}>Popular Methods<button style={styles.viewAll}>View All</button></div>
        	<div style={styles.row}>
        		<div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div>
        	</div>
        	<div style={styles.catHeader}>Favorite Methods<button style={styles.viewAll}>View All</button></div>
        	<div style={styles.row}>
        		<div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div><div style={styles.recipe}></div>
        	</div>
        </div>
      </div>
    )
  }
}

export default AllRecipesGrid