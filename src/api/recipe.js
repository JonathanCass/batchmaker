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
export function addFavorite(newUsersArray){
	axios.post('http://localhost:3001/batchmaker',{
	  recipes: [...data.batchmaker.recipes],
      steps: [...data.batchmaker.steps],
      allocations: [...data.batchmaker.allocations],		
      users: newUsersArray 
    })
}
export function login(login){
	store.dispatch({
		type: 'LOGIN',
		login: login
	})
}