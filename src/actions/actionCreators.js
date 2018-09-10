export function loginWatcher(authParams) {
  return { type: 'LOGIN_WATCHER', payload: authParams };
}

export function updateProfile(profile) {
  return { type: 'UPDATE_PROFILE', payload: profile };
}
