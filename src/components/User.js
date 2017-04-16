import React from 'react'

const styles={
	userContainer:{
		height: 1370,
		width: 1220,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'inline-block',
	},
	userProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 30,
		background: 'black',
		margin: '40px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)'
	},
	loginId:{
		height: 50,
		width: 200,
	},
	category:{
		margin: '30px 0 20px 0',
		height: 50,
		width: 640,
		fontSize: 30,
		border: 'solid 2px red',
		borderWidth: '0 0 2px 0',
		color: '#FF5722'
	},
	title:{
		fontSize: 50
	},
	label:{
		color: '#02A4EC',
		width: 120,
		display:'inline-block',
		textAlign: 'right'
	}
}
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    	login: "", password: "", avatarUrl:"", handle:""
    }
  }
  handleChange = (e) => {
        this.setState({
        	[e.target.name] : e.target.value
        })
  	}
  render() {
    return (
      <div style={styles.userContainer}>
      	<div style={styles.userProper}>
      		<h1 style={styles.title}>User Log In Form</h1>
      		<div style={styles.category}>Existing Users Log In Below</div>
      		<form>
      			<div>
      				<span style={styles.label}>Log In</span><input type="text" style={styles.input} name="login" onChange={this.handleChange} ></input>
      				<span style={styles.label}>Password</span><input type="password" style={styles.input} name="password" onChange={this.handleChange} ></input>
      			</div>
      		</form>
      		<div style={styles.category}>New users create an account below}</div>
      			<div>
      				<span style={styles.label}>Log In </span><input type="text" style={styles.input} name="login" onChange={this.handleChange} ></input>
      				<span style={styles.label}>Password</span><input type="password" style={styles.input} name="password" onChange={this.handleChange} ></input>
      			</div>
      			<div>
      				<span style={styles.label}>Avatar Url</span><input type="text" style={styles.input} name="avatarUrl" onChange={this.handleChange} ></input>
      				<span style={styles.label}>Handle</span><input type="text" style={styles.input} name="handle" onChange={this.handleChange} ></input>
      			</div>
      	</div>
      </div>
    )
  }
}

export default User