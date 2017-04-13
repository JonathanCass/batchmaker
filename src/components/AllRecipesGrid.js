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
		padding: 20,
		background: 'black',
		margin: '70px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)'
	},
}
class AllRecipesGrid extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.gridContainer}>
        <div style={styles.gridProper}>

        </div>
      </div>
    )
  }
}

export default AllRecipesGrid