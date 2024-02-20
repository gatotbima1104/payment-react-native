import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
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
    {
      id: 6,
      categoryTitle: "media",
    },
    {
      id: 7,
      categoryTitle: "football",
    },
    {
      id: 8,
      categoryTitle: "basketball",
    },
    {
      id: 9,
      categoryTitle: "soccer",
    },
    {
      id: 10,
      categoryTitle: "baseball",
    },
    {
      id: 11,
      categoryTitle: "hockey",
    },
    {
      id: 12,
      categoryTitle: "golf",
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
    updateCategoryId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

export const { updateCategoryId, resetCategories } = Categories.actions;
export default Categories.reducer;
