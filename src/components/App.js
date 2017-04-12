import React from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecipeForm from './RecipeForm'

export default React.createClass({
  render() {
    return (
	    	<div>	
	      	<Header/>
	      	<Sidebar/>
          <RecipeForm/>
	      </div>
    )
  }
})