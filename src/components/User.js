import React from 'react'
import data from '../../db.json'
import {createUser} from '../api/recipe'
import {login} from '../api/recipe'
import {connect} from 'react-redux'

const styles={
	userContainer:{
		height: 1370,
		width: 1440,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'block',
		padding: '5px 240px 10px 460px'
	},
	userProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 30,
		background: 'black',
		margin: '40px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)',
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
		display: 'block'
	},
	category2:{
		margin: '0 0 20px 0',
		height: 70,
		paddingTop: 20,
		width: 640,
		fontSize: 30,
		border: 'solid 2px #009688',
		borderWidth: '0 0 2px 0',
		color: '#FF5722',
		float: 'right'
	},
	title:{
		fontSize: 50
	},
	label:{
		color: '#02A4EC',
		width: 110,
		display:'inline-block',
		textAlign: 'right'
	},
	label2:{
		color: '#02A4EC',
		width: 540,
		display:'inline-block',
		textAlign: 'left',
		marginTop: 20
	},
	submit:{
		height: 40,
		width: 80,
		background: '#D50000',
		fontSize: 18,
		color: 'white',
	},
	submit2:{
		height: 40,
		width: 200,
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
		float: 'left',
		marginLeft: 55
	},
	userHandle:{
		color: '#D50000'
	},
	input:{
		width: 140,
		fontSize: 14,
		padding: 5
	},
	bio:{
		width: 400,
		height: 120,
		marginRight: 100,
		fontSize: 16
	},
	newUserBox:{
		marginLeft: 50
	}
}
class User extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    	login: "", password: "", newLogin:"", newPassword:"", avatarUrl:"", handle:"",bio:""
    }
  }
  handleChange = (e) => {
        this.setState({
        	[e.target.name] : e.target.value
        })
  	}
  	handleLogin = (e) => {
  		e.preventDefault()
  		var flag = true
  		data.batchmaker.users.forEach(function(user){
  			if(user.login === this.state.login && user.password === this.state.password){
  				login(user.id)
  				flag = false
  				alert("Succesfully Logged In As " + user.handle)
  			}
  		}.bind(this))
  		if(flag){
  			alert("Inccorect Password or Login Id")
  		}
        this.setState({
        	login: "",
        	password:""
        })
  	}
  	addUser = (e) => {
  		e.preventDefault()
  		var newName = this.state.newLogin
  		var green = true
  		data.batchmaker.users.forEach(function(user) {
  			if(user.login === newName){
  				alert("Login Id exists. Choose a different one.")
  				green = false
  			}
  		})
  		if(this.state.newLogin === ""|| this.state.newPassword === "" || this.state.handle === ""){
  			alert("Login / Password / Handle can not be empty strings. No user created.")
  				green = false
  		}
  		if(green){
  			var userObj={
        			"id": data.batchmaker.users.length,
        			"login": this.state.newLogin,
        			"password": this.state.newPassword,
        			"handle": this.state.handle,
        			"favorites": [],
					"notes" : [],
        			"avatarUrl": this.state.avatarUrl,
        			"bio": this.state.bio
  			}
  			createUser(userObj)
  			this.setState({
  				newLogin: "", 
  				newPassword: "", 
  				avatarUrl: "", 
  				handle: "",
  				bio: ""
  			})
  		}

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
      		<div style={styles.category2}>New users create an account below}</div>
      			<div style={styles.newUserBox}>
      				<span style={styles.label2}>Log In </span><input type="text" style={styles.input} name="newLogin" value={this.state.newLogin} onChange={this.handleChange} ></input>
      				<span style={styles.label2}>Password</span><input type="password" style={styles.input} name="newPassword" value={this.state.newPassword} onChange={this.handleChange} ></input>
      				<span style={styles.label2}>Avatar Url</span><input type="text" style={styles.input} name="avatarUrl" value={this.state.avatarUrl} onChange={this.handleChange} ></input>
      				<span style={styles.label2}>Handle</span><input type="text" style={styles.input} name="handle" value={this.state.handle} onChange={this.handleChange} ></input>
      				<span style={styles.label2}>Short Bio</span><textarea style={styles.bio} name="bio" value={this.state.bio} onChange={this.handleChange}></textarea>
      				<button style={styles.submit2} onClick={this.addUser}>Create New Account</button>
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




