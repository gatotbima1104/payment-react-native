import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedItem: null,
};

const Donation = createSlice({
  name: "donation",
  initialState: initialState,
  reducers: {
    resetDonation: () => {
      return initialState;
    },
    updateDonationId: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export default Donation.reducer;
export const { resetDonation, updateDonationId } = Donation.actions;
