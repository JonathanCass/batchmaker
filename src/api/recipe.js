import store from '../store'
import axios from 'axios'

export function getData() {
	axios.get('http://localhost:3001/batchmaker').then(res=>{
		store.dispatch({
			type: 'GET_DATA',
			data: res.data
		})
	})
}	
export function addRecipe(recipeObject, stepArray, ingredientArray){
	axios.get('http://localhost:3001/batchmaker').then(res=>{
		axios.post('http://localhost:3001/batchmaker',{
      recipes: [...res.data.recipes, recipeObject],
      steps: [...res.data.steps, ...stepArray],
      allocations: [...res.data.allocations, ...ingredientArray],
      users: [...res.data.users] 
    })
	})
}
export function createUser(userObject){
	axios.get('http://localhost:3001/batchmaker').then(res=>{
    axios.post('http://localhost:3001/batchmaker',{
	  recipes: [...res.data.recipes],
      steps: [...res.data.steps],
      allocations: [...res.data.allocations],		
      users: [...res.data.users, userObject]
    })
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