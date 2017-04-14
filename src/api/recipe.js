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

export function addIngredient(ingInfo) {
	axios.post('http://localhost:3001/', {
		Test : "Fails"
		/*
		"recipeId" : data.recipes.length + 1,
		"stepId": data.steps.length + 1,
		"numberOf": ingInfo.numberOf,
		"unitOf" : ingInfo.unitOf,
		"what" : ingInfo.what*/
	})
}

export function addStep(stepInfo) {
	axios.post('http://localhost:3001/db/step', {

	})
}
	
