import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addMessage: (state, action) => {
      //unshift - to push from first in array
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
