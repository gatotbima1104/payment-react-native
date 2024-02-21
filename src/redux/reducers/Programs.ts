import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  programs: [
    {
      id: 1,
      programTitle: "environment",
    },
    {
      id: 2,
      programTitle: "lifestyle",
    },
    {
      id: 3,
      programTitle: "sociality",
    },
    {
      id: 4,
      programTitle: "charity",
    },
    {
      id: 5,
      programTitle: "education",
    },
    {
      id: 6,
      programTitle: "media",
    },
    {
      id: 7,
      programTitle: "football",
    },
    {
      id: 8,
      programTitle: "basketball",
    },
    {
      id: 9,
      programTitle: "soccer",
    },
    {
      id: 10,
      programTitle: "baseball",
    },
    {
      id: 11,
      programTitle: "hockey",
    },
  ],
  selectedId: 1,
};

const Programs = createSlice({
  name: "programs",
  initialState: initialState,
  reducers: {
    resetProgram: () => {
      return initialState;
    },
    updateProgramId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { updateProgramId, resetProgram } = Programs.actions;
export default Programs.reducer;
