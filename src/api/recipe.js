import store from '../store'
import axios from 'axios'

export function getData() {
	axios.get('http://localhost:3001/db').then(res=>{
		store.dispatch({
			type: 'GET_DATA',
			data: res.data
		})
	})
}	
export function addRecipe(recipeObject, stepArray, ingredientArray){
    axios.post('http://localhost:3001/recipes',{
      recipes : recipeObject  
    })
    axios.post('http://localhost:3001/steps',{
      steps : [...stepArray]
    })
    axios.post('http://localhost:3001/allocations',{
      allocations : [...ingredientArray]
    })
}