import React from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecipeForm from './RecipeForm'
import AllRecipesGrid from './AllRecipesGrid'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default React.createClass({
  render() {
    return (
    	<Provider store={store}>
    	<Router>
		    <div>	
		      	<Header/>
		      	<Sidebar/>
		      	<Route exact={true} path='/' component={AllRecipesGrid} />
          		<Route path='/RecipeForm/' component={RecipeForm} />
		    </div>
	    </Router>
	    </Provider>
    )
  }
})