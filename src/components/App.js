import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./Header"
import Sidebar from "./Sidebar"

export default React.createClass({
  render() {
    return (
    	<MuiThemeProvider muiTheme={getMuiTheme()}>
	    	<div>	
	      		<Header/>
	      		<Sidebar/>
	      	</div>
      	</MuiThemeProvider>
    )
  }
})