import store from '../store'
import axios from 'axios'
import data from '../../db.json'

export function getData() {
	axios.get('http://localhost:3001/batchmaker').then(res=>{
		store.dispatch({
			type: 'GET_DATA',
			data: res.data
		})
	})
}	
export function addRecipe(recipeObject, stepArray, ingredientArray){
    axios.post('http://localhost:3001/batchmaker',{
      recipes: [...data.batchmaker.recipes, recipeObject],
      steps: [...data.batchmaker.steps, ...stepArray],
      allocations: [...data.batchmaker.allocations, ...ingredientArray],
      users: [...data.batchmaker.users] 
    })
}
export function createUser(userObject){
	axios.post('http://localhost:3001/batchmaker',{
	  recipes: [...data.batchmaker.recipes],
      steps: [...data.batchmaker.steps],
      allocations: [...data.batchmaker.allocations],		
      users: [...data.batchmaker.users, userObject]
    })
}
export function addFavorite(newUsersArray, newRecipesArray){
	axios.get('http://localhost:3001/batchmaker').then(res=>{
    axios.post('http://localhost:3001/batchmaker',{
	    recipes: newRecipesArray,
      steps: [...res.data.steps],
      allocations: [...res.data.allocations],		
      users: newUsersArray 
    })
	})
}	
export function postNote(newUserArray) {
	axios.get('http://localhost:3001/batchmaker').then(res=>{
		axios.post('http://localhost:3001/batchmaker',{				
      users: newUserArray,
      recipes: [...res.data.recipes],
      allocations: [...res.data.allocations],
      steps: [...res.data.steps]
    })
	})
}	
export function login(login){
	store.dispatch({
		type: 'LOGIN',
		login: login
	})
}