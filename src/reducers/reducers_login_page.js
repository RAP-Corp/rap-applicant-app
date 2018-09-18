const initialState = {
  profile: {}
};

export default function (state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_PROFILE':
      return {...state, profile: action.payload};
    case 'LOGIN_ERROR_TOGGLE':
      return {...state, loginError: action.payload};
  default: return state;
  }
}
