import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: null,
	nama_lengkap: null,
	umur: null,
	username: null,
	session: null,
	isLoading: true,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action) => {
			console.log(state);
			state.email = action.payload.email;
			state.nama_lengkap = action.payload.nama_lengkap;
			state.umur = action.payload.umur;
			state.username = action.payload.username;
			state.session = action.payload.session;
			state.isLoading = action.payload.isLoading;
		},
	},
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
