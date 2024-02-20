const initialState = {
  user: null,
  isFetching: false,
  error: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isFetching: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        user: action.payload
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
