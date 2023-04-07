const Initial_State = {
    cars : []
}


export const carsReducer = (state=Initial_State, action) => {
    switch(action.type) {

        case "GET_ALL_CARS" : {
            return{
                ...state,
                cars : action.payload
            }
        }

        default : return state;
    }
}