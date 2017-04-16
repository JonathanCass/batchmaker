import React from 'react'
import data from '../../db.json'
import {login} from '../api/recipe'
import {connect} from 'react-redux'

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
		margin: '0 0 20px 0',
		height: 70,
		paddingTop: 20,
		width: 640,
		fontSize: 30,
		border: 'solid 2px #009688',
		borderWidth: '0 0 2px 0',
		color: '#FF5722',
		clear: 'left'
	},
	title:{
		fontSize: 50
	},
	label:{
		color: '#02A4EC',
		width: 115,
		display:'inline-block',
		textAlign: 'right'
	},
	submit:{
		height: 40,
		width: 80,
		background: '#D50000',
		fontSize: 18,
		color: 'white',
	},
	displayNone:{
		display: 'none'
	},
	loggedIn:{
		fontSize: 26,
		float: 'left',
		margin: '20px 0 0 20px',
		width: 400,
		height: 80,
	},
	avatar:{
		width: 100,
		height: 100,
		display: 'inline-block',
		background: 'white',
		borderRadius: 15,
		border: '2px solid #009688',
		float: 'left'
	},
	userHandle:{
		color: '#D50000'
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
  	handleLogin = (e) => {
  		e.preventDefault()
  		data.batchmaker.users.forEach(function(user){
  			if(user.login === this.state.login && user.password === this.state.password){
  				login(user.id)
  				
  				alert("Succesfully Logged In As " + user.handle)
  			}
  		}.bind(this))
        this.setState({
        	login: "",
        	password:""
        })
  	}
  	handleCreate = (e) => {
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
      				<span style={styles.label}>Log In</span><input type="text" style={styles.input} name="login" value={this.state.login} onChange={this.handleChange} ></input>
      				<span style={styles.label}>Password</span><input type="password" style={styles.input} name="password" value={this.state.password} onChange={this.handleChange} ></input>
      				<button style={styles.submit} onClick={this.handleLogin}>Log In</button>
      				<div>
      				    <img style={styles.avatar} src={data.batchmaker.users[this.props.user].avatarUrl} alt={data.batchmaker.users[this.props.user].handle} />
      					<div style={ this.props.user === -1 ? styles.displayNone : styles.loggedIn}>Logged in as <span style={styles.userHandle}>{data.batchmaker.users[this.props.user].handle}</span></div>
      				</div>
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

function mapStateToProps(appState){
	return { user : appState.user}
}

export default connect(mapStateToProps)(User)




