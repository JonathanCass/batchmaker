import React from 'react'

const styles={
	stepContainer:{
		color: 'white'
	}
}

class StepAdder extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.stepContainer}>
        STEP ADDER
      </div>
    )
  }
}

export default StepAdder