import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Character {
  firstName: string;
  lastName: string;
  imageUrl: string;
}

interface InitialState {
  value: Character[];
}

const initialState = {
  value: [] as Character[],
} as InitialState;

export const characters = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        console.log("Loading...");
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
});

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const fetchedCharacters = await await fetch(
      "https://thronesapi.com/api/v2/Characters"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });

    return fetchedCharacters;
  }
);

export default characters.reducer;
