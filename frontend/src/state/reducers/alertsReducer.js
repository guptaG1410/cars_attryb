const Initial_State = {
  loading: false,
};

export const alertsReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
