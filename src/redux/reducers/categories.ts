import { createSlice } from "@reduxjs/toolkit";
import { CategoriesData } from "../../constants/CategoriesData";

const initialState = {
  categories: CategoriesData,
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
