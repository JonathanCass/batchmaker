const initialState ={
	recipes: [],
	steps: [],
	allocations: [],
	user: 0
}

export default function(state = initialState, action){
	switch(action.type){
		case 'GET_DATA' :
			return{...state, recipes: [...action.data.recipes], steps: [...action.data.steps], allocations: [...action.data.allocations]}
		case 'LOGIN' :
			return{user: action.login}
		default :
			return state
	}
}

