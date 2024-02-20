export const loginStart = () => ({
  type: 'LOGIN_START'
});

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error
});

export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginStart());
    fetch('https://localhost:7237/api/auth/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(data => {
        // Handle your response here. Assuming data contains the user.
        dispatch(loginSuccess(data));
      })
      .catch(error => {
        dispatch(loginFailure(error.message));
      });
  }
};
