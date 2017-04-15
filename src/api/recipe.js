import store from '../store'
import axios from 'axios'
import data from '../../db.json'

export function getData() {
	axios.get('http://localhost:3001/db').then(res=>{
		store.dispatch({
			type: 'GET_DATA',
			data: res.data
		})
	})
}	
export function addIngredient(numberOf, unitOf, what){
    axios.post('http://localhost:3001/allocations',{
      "recipeId": data.recipes.length + 1,
      "stepId": data.steps.length + 1,
      "numberOf": numberOf,
      "unitOf": unitOf,
      "what": what
    })
}
export function addStep(order, directions){
    axios.post('http://localhost:3001/steps',{
      "order": 1,
      "recipeId": data.recipes.length + 1,
      "directions": directions
    })
}
export function addRecipe(name, by, photoUrl, type, prepTime, cookTime, cookTemp, servingAmount, servingType, privacy){
    axios.post('http://localhost:3001/recipes',{
      "name": name,
      "by": by,
      "photoUrl": photoUrl,
      "type": type,
      "prepTime": prepTime,
      "cookTime": cookTime,
      "cookTemp": cookTemp,
      "servingAmount": servingAmount,
      "servingType": servingType,
      "public": privacy
    })
}