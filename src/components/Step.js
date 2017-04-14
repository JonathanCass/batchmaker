import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../api/recipe'

const styles = {
	stepContainer:{
		width: 640,
		height: 276,
		border: 'solid 2px white',
		borderRadius: 5,
		overflow: 'scroll'
	},
	aStep:{
		width: 640,
		height: 138,
	},
	stepNumber:{
		width: 636,
		height: 30,
		fontSize:22,
		border: '1px solid #009688',
  		borderWidth: ' 0 0 2px 0',
  		marginTop: 15,
  		paddingLeft: 10,
  		color: 'red'
	},
	directions:{
		width: 400,
		height: 90,
		paddingLeft: 10,
		marginTop: 15,
		float: 'left'
	},
	allocations:{
		marginTop:20,
		width: 240,
		height: 140,
		display: 'inline-block',
		overflow: 'scroll',
	},
	entryAmount:{
		width: 90,
		height: 35,
		float: 'left',
		border: '1px solid red',
  		borderWidth: ' 1px 1px 0 0',
  		lineHeight: '35px',
  		paddingRight: 10,
  		textAlign: 'right',
  		color: '#03A9F4'
	},
	entryWhat:{
		width: 150,
		height: 35,
		float: 'right',
		border: '1px solid red',
  		borderWidth: ' 1px 0 0 0',
  		padding: '5px 0 0 10px',
  		fontSize: 14,
  		color: '#EF4116'
	},
	entryAmountNoBorder:{
		width: 90,
		height: 35,
		float: 'left',
		border: '1px solid red',
  		borderWidth: ' 0 1px 0 0',
  		lineHeight: '35px',
  		paddingRight: 10,
  		textAlign: 'right',
  		color: '#03A9F4'
	},
	entryWhatNoBorder:{
		width: 150,
		height: 35,
		float: 'right',
  		paddingLeft: 10,
  		fontSize: 14,
  		padding: '5px 0 0 10px',
  		color: '#EF4116'
	},
	allocationEntry:{
		width: 240,
		height: 35,
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
        			<div key={'step' + step.id} style={ Number(step.recipeId) === Number(this.props.recipeId) ? styles.aStep : styles.displayNone}>
        				<div style={styles.stepNumber}>Step {step.order}</div>
        				<div style={styles.directions}>{step.directions}</div>
        				<div style={styles.allocations}>
        					{this.props.allocations.map(allocation=>(
        						<div key={'allocation'+ allocation.id} style={allocation.recipeId == this.props.recipeId ? styles.allocationEntry : styles.displayNone}>
        							<div style={ this.props.steps[allocation.stepId -1].order == 1 ? styles.entryAmountNoBorder : styles.entryAmount}> {allocation.numberOf + " "} {allocation.unitOf} </div>
        							<div style={ this.props.steps[allocation.stepId -1].order == 1 ? styles.entryWhatNoBorder : styles.entryWhat}> {allocation.what} </div>
        						</div>
        					))}
        				</div>
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