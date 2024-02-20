import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Asenkron thunk action
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await fetch("https://localhost:7237/api/auth/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      let data = await response.json();
      if (response.status === 200) {

        if (data.authenticateResult) {
          localStorage.setItem("token", data.authToken.toString())
          localStorage.setItem("expiredate", data.accessTokenExpireDate.toString())
          localStorage.setItem("username", this.state.username)
          alert("giriş başarılı.")


        }
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// Slice tanımı
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Burada senkron reducer'larınız olacak (gerekirse)
  },

});

// Reducer'ı dışa aktar
export default userSlice.reducer;
