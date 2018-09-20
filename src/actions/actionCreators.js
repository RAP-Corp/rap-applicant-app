export function loginWatcher(authParams) {
  return { type: 'LOGIN_WATCHER', payload: authParams };
}

export function registrationWatcher(registrationParams) {
  return { type: 'REGISTRATION_WATCHER', payload: registrationParams };
}

export function updateProfile(profile) {
  return { type: 'UPDATE_PROFILE', payload: profile };
}

export function loginErrorToggle(isError) {
  return { type: 'LOGIN_ERROR_TOGGLE', payload: isError};
}

export function registrationErrorMessage(errorMessage) {
  return {type: 'REGISTRATION_ERROR_TOGGLE', payload: errorMessage}
}
