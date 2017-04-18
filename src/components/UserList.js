import React from 'react'
import data from '../../db.json'
import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'

const styles={
	listContainer:{
		height: 1370,
		width: 1440,
		background: 'radial-gradient(circle, #ee0979, #ff6a00)',
		display: 'block',
		padding: '5px 240px 10px 460px'
	},
	listProper:{
		color: 'white',
		width: 700,
		height: 1220,
		padding: 30,
		background: 'black',
		margin: '40px auto',
		borderRadius: 20,
		boxShadow: '15px 15px 10px 0px rgba(211,19,19,1)',
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'scroll'
	},
	avatar:{
		width: 200,
		height: 200,
		borderRadius: 25
	},
	userBox:{
		margin: '30px 0 10px 20px',
		background: 'radial-gradient(circle, #000046, #1CB5E0)',
		padding: 20,
		borderRadius: 25,
		width: 300
	},
	bioText:{
		color: 'white',
		fontSize: 16,
		fontWeight: 'normal'
	},
	userHandle:{
		color: '#FF5722',
		fontWeight: 'bold',
		fontSize: 22
	},
	bioBlock:{
		color: '#D50000',
		fontWeight: 'bold',
		fontSize: 20
	}
}

class UserList extends React.Component {
  /*constructor(props) {
    super(props)
  }*/

  render() {
    return (
      <div style={styles.listContainer}>
      	<div style={styles.listProper}>
      		{data.batchmaker.users.map(user=>(
      			<div key={Math.random()} style={styles.userBox}>
      				<div style={styles.userHandle}>{user.handle} </div>
      				<img src={user.avatarUrl} style={styles.avatar} alt={user.id} />
      				<div style={styles.bioBlock}>About {user.handle} : <span style={styles.bioText}> {user.bio} </span> </div>
      			</div>
      		))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
	return { recipes : appState.recipes, allocations: appState.allocations, users: appState.users, user: appState.user}
}

export default connect(mapStateToProps)(UserList)