import React from 'react'


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
 	}
}

const Sidebar = () => (
  <div style={styles.sidebarContainer}>
  	<ul style={styles.list}>
        <li style={styles.sidebarEntry} > This User's Methods </li>
        <li style={styles.sidebarEntry} > OpenSource Methods </li>
        <li style={styles.sidebarEntry} > Popular Methods </li>
        <li style={styles.sidebarEntry} > Favorite Methods </li>
        <li style={styles.sidebarEntry} > Nutrient Repository </li>
    </ul>
  </div>
)

export default Sidebar