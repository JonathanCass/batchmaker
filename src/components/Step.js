import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../api/recipe'

const styles = {
	stepContainer:{
		width: 640,
		height: 276,
		border: 'solid 2px white',
		borderRadius: 5,
	},
	aStep:{
		width: 640,
		height: 138,
	},
	stepNumber:{
		width: 640,
		height: 30,
		fontSize:22,
		border: '1px solid #009688',
  		borderWidth: ' 0 0 1px 0',
  		marginTop: 15,
  		paddingLeft: 10
	},
	directions:{
		width: 480,
		height: 90,
		paddingLeft: 10,
		marginTop: 15
	},
	allocations:{
		width: 160,
		height: 90
	},
	allocationEntry1:{
		width: 160,
		height: 90,
	},
	allocationEntry1:{
		width: 160,
		height: 90,
		border: '1px solid #009688',
  		borderWidth: ' 1px 0 0 0',
	},
	displayNone:{
		display: 'none'
	}

}
class Step extends React.Component {
  	constructor(props) {
    	super(props)
  	}
	componentWillMount(){
		getData()
	}
  	render() {
  		console.log(this.props)
    	return (
      		<div style={styles.stepContainer}>
        		{this.props.steps.map(step=>(
        			<div style={ step.recipeId == this.props.recipeId ? styles.aStep : styles.displayNone}>
        				<div style={styles.stepNumber}>Step {step.order}</div>
        				<div style={styles.directions}>{step.directions}</div>
        			</div>
        		))}
      		</div>
    	)
  	}
}

function mapStateToProps(appState){
	return { steps: appState.steps, allocations: appState.allocations }
}


export default connect(mapStateToProps)(Step)