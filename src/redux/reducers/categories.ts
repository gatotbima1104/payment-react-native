import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  Categories: [
    {
      id: 1,
      categoryTitle: "environment",
    },
    {
      id: 2,
      categoryTitle: "lifestyle",
    },
    {
      id: 3,
      categoryTitle: "sociality",
    },
    {
      id: 4,
      categoryTitle: "charity",
    },
    {
      id: 5,
      categoryTitle: "education",
    },
  ],
  selectedId: 1,
};

const Categories = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateCategoryId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
  },
});

export const { updateCategoryId, resetCategories } = Categories.actions;
export default Categories.reducer;
