import React from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecipeForm from './RecipeForm'
import AllRecipesGrid from './AllRecipesGrid'

import {BrowserRouter as Router, Route} from 'react-router-dom'


export default React.createClass({
  render() {
    return (
    	<Router>
		    <div>	
		      	<Header/>
		      	<Sidebar/>
		      	<Route exact={true} path='/' component={AllRecipesGrid} />
          		<Route path='/RecipeForm/' component={RecipeForm} />
		    </div>
	    </Router>
    )
  }
})