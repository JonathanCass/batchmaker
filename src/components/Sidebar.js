import React from 'react'
import {Link} from 'react-router-dom'


const styles = {
	sidebarContainer:{
		display: 'inline-block',
		float: 'left',
		width: 220,
		height: 1370,
		background: 'linear-gradient( #030304, #0A0C0D)'	
	},
  	sidebarEntry:{
  		border: '2px solid #009688',
  		borderWidth: ' 0 0 2px 0',
  		fontSize: 24,
  		width: 160,
  		height: 124,
  		whiteSpace: 'no-wrap',
  		textAlign: 'center',
  		color: '#E0E0E0',
  		paddingTop: 40
  	},
  	list:{
  		listStyle: 'none',
  		padding: 30,
 	  },
    catLinks:{
      color: 'white'
    }
}

const Sidebar = () => (
  <div style={styles.sidebarContainer}>
  	<ul style={styles.list}>
        <li style={styles.sidebarEntry}><Link style={styles.catLinks} to="/UsersRecipes/"> This User's Methods </Link></li>
        <li style={styles.sidebarEntry}><Link style={styles.catLinks} to="/PublicRecipes/"> OpenSource Methods </Link></li>
        <li style={styles.sidebarEntry}><Link style={styles.catLinks} to="/PopularRecipes/"> Popular Methods </Link></li>
        <li style={styles.sidebarEntry}><Link style={styles.catLinks} to="/UsersFavorites/"> Favorite Methods </Link></li>
        <li style={styles.sidebarEntry}><Link style={styles.catLinks} to="/UserList/"> User Repository </Link></li>
    </ul>
  </div>
)

export default Sidebar