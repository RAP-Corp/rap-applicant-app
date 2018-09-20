const initialState = {
  profile: {}
};

export default function (state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_PROFILE':
      return {...state, profile: action.payload};
    case 'REGISTRATION_ERROR_TOGGLE':
      return {...state, loginErrorMessage: action.payload};
  default: return state;
  }
}
