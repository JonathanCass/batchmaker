const initialState ={
	recipes: [],
	steps: [],
	allocations: []
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_DATA' :
			return{...state, recipes: [...action.data.recipes], steps: [...action.data.steps], allocations: [...action.data.allocations]}
		default :
			return state
	}
}

