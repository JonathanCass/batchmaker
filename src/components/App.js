import React from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecipeForm from './RecipeForm'
import User from './User'
import AllRecipesGrid from './AllRecipesGrid'
import PopularRecipes from './PopularRecipes'
import PublicRecipes from './PublicRecipes'
import UsersFavorites from './UsersFavorites'
import UsersRecipes from './UsersRecipes'
import RecipeView from './RecipeView'
import UserList from './UserList'
import IntroPage from './IntroPage'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom'
import RecipeAddedScreen from './RecipeAddedScreen'


export default React.createClass({
  render() {
    return (
    	<Provider store={store}>
    	<Router history={browserHistory}>
		    <div>	
		      	<Header/>
		      	<Sidebar/>
		      	<Route exact={true} path='/' component={IntroPage} />
							<Route path='/AllRecipesGrid/' component={AllRecipesGrid} />
          		<Route path='/RecipeForm/' component={RecipeForm} />
          		<Route path='/RecipeView/:recipeId' component={RecipeView} />
              <Route path='/User/' component={User} />
              <Route path='/PopularRecipes/' component={PopularRecipes} />
              <Route path='/PublicRecipes/' component={PublicRecipes} />
              <Route path='/UsersFavorites/' component={UsersFavorites} />
              <Route path='/UsersRecipes/' component={UsersRecipes} />
              <Route path='/UserList/' component={UserList} />
							<Route path='/RecipeAddedScreen/' component={RecipeAddedScreen} />
		    </div>
	    </Router>
	    </Provider>
    )
  }
})